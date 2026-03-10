import { brand } from '@/data/brand';
import { ActionButton } from '@/components/cartao/ActionButton';

export function ActionList() {
  return (
    <div className="mt-6 space-y-3">
      {brand.quickActions.map((action, index) => (
        <ActionButton key={action.label} action={action} index={index} />
      ))}
    </div>
  );
}
