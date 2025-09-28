// Allow Ionicons custom element in TSX
declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      name?: string;
      src?: string;
      size?: string;
      color?: string;
      role?: string;
      "aria-label"?: string;
      className?: string;
    };
  }
}
