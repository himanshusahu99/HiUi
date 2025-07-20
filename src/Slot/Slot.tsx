import { forwardRef, Children, cloneElement, isValidElement } from "react";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement;
}

const Slot = forwardRef<HTMLElement, SlotProps>((props, ref) => {
  const { children, ...rest } = props;

  if (!isValidElement(children)) {
    return null;
  }
  const child = Children.only(children);

  return cloneElement(child, {
    ...rest,
    ref,
  } as any);
});

Slot.displayName = "Slot";

export default Slot;
