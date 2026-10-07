type FamilyMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

export function FamilyMark({
  size = 40,
  className,
  title = "Flatapps family mark: three equal app tiles, middle cyan",
}: FamilyMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="1024" height="1024" rx="224" fill="#101E3A" />
      <rect x="148" y="388" width="220" height="248" rx="52" fill="#F2EDE6" />
      <rect x="402" y="388" width="220" height="248" rx="52" fill="#00E5CC" />
      <rect x="656" y="388" width="220" height="248" rx="52" fill="#F2EDE6" />
    </svg>
  );
}
