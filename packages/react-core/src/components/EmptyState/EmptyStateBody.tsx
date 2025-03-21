import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';

export interface EmptyStateBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the empty state body */
  children?: React.ReactNode;
  /** Additional classes added to the empty state body */
  className?: string;
}

export const EmptyStateBody: React.FunctionComponent<EmptyStateBodyProps> = ({
  children,
  className,
  ...props
}: EmptyStateBodyProps) => (
  <div className={css(styles.emptyStateBody, className)} {...props}>
    {children}
  </div>
);
EmptyStateBody.displayName = 'EmptyStateBody';
