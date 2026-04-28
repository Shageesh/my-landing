interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className = '' }: TextProps) {
  return (
    <p className={`text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
