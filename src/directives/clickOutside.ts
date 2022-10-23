import { Directive } from "vue";

export const clickOutside: Directive<HTMLElement, Function> = (() => {
  const checkIfClickedInside = (
    event: Event,
    element: HTMLElement,
    callBackFn: Function
  ) => {
    const isInside = event.composedPath().includes(element);

    const elementHasPreviouslyBeenClicked = element.dataset.clicked === "true";

    if (isInside) {
      element.dataset.clicked = "true";
    } else {
      element.dataset.clicked = "false";
      if (elementHasPreviouslyBeenClicked) {
        callBackFn();
      }
    }
  };

  const allListeners: { element: HTMLElement; listener: (e: Event) => void }[] =
    [];

  return {
    created(element) {
      element.dataset.clicked = "false";
    },

    mounted(element, binding) {
      const myListener = (e: Event) => {
        checkIfClickedInside(e, element, binding.value);
      };
      allListeners.push({ element, listener: myListener });
      window.addEventListener("click", myListener);
    },

    unmounted(element) {
      const eventIndex = allListeners.findIndex(
        (listener) => listener.element === element
      );

      if (eventIndex !== -1) {
        const listener = allListeners[eventIndex].listener;
        window.removeEventListener("click", listener);
        allListeners.splice(eventIndex, 1);
      }
    },
  };
})();
