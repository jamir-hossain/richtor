import clsx from "clsx";
import { icons, type LucideIcon } from "../icons/icons";
import { LucideProps } from "lucide-react";

export type IconProps = LucideProps & {
  name: keyof typeof icons;
};

export const Icon = ({ name, className, size = 20, ...props }: IconProps) => {
  const Comp: LucideIcon = icons[name];

  return <Comp size={size} className={clsx("rte-icon", className)} {...props} />;
};

export default Icon;
