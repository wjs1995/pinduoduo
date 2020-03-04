export function Emoji() {
  return (target: object, key: string) => {
    let value = target[key];
    const getter = () => {
      return value;
    };
    const setter = (val: string) => {
      value = `%%%${val}%%%`;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true
    });
  };
}

export function Confirmable(message: string) {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = function f(...args: any[]) {
      const allow = window.confirm(message);
      if (allow) {
        return original.apply(this, args);
      }
      return null;
    };
    return descriptor;
  };
}
