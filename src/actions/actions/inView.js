// detect if el is in view or not
export function inView(node, callbackOrOptions = () => {}) {
    const isFunction = typeof callbackOrOptions === 'function';
    const callback = isFunction ? callbackOrOptions : () => {};
    const options = isFunction ? {} : callbackOrOptions;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting, entry);
      },
      options
    );
  
    observer.observe(node);
  
    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }
  