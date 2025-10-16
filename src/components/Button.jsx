const Button = ({
  as = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const Comp = as;
  const cls = [
    "btn",
    variant === "primary" && "btn-primary",
    variant === "ghost" && "btn-ghost",
    variant === "danger" && "btn-danger",
    className,
  ]

    .filter(Boolean)
    .join(" ");
  return <Comp className={cls} {...props} />;
};

export default Button;
