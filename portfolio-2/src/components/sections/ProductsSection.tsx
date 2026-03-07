import { products } from '@/data/products';

function getStatusDisplay(status: string): { label: string; colorClass: string } {
  switch (status) {
    case 'live':
      return { label: 'LIVE', colorClass: 'text-terminal-primary' };
    case 'in-development':
      return { label: 'IN-DEV', colorClass: 'text-terminal-accent' };
    case 'launching-2026':
      return { label: 'LAUNCH', colorClass: 'text-terminal-secondary' };
    case 'under-nda':
      return { label: 'NDA', colorClass: 'text-terminal-error' };
    default:
      return { label: 'OTHER', colorClass: 'text-terminal-dim' };
  }
}

function getYear(statusLabel: string): string {
  const match = statusLabel.match(/\d{4}/);
  return match ? match[0] : '2024';
}

export default function ProductsSection() {
  return (
    <div className="text-sm">
      <div className="text-terminal-dim mb-2">total {products.length}</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <tbody>
            {products.map((product) => {
              const { label, colorClass } = getStatusDisplay(product.status);
              const year = getYear(product.statusLabel);
              const name = product.isConfidential && product.displayName
                ? product.displayName
                : product.name;

              return (
                <tr key={product.id} className="border-b border-terminal-border/30">
                  <td className="text-terminal-dim pr-3 py-1 whitespace-nowrap">
                    drwxr-xr-x
                  </td>
                  <td className={`${colorClass} pr-3 py-1 whitespace-nowrap font-bold`}>
                    {label.padEnd(6)}
                  </td>
                  <td className="text-terminal-dim pr-3 py-1 whitespace-nowrap">
                    {year}
                  </td>
                  <td className="text-terminal-accent pr-3 py-1 whitespace-nowrap">
                    {name.toLowerCase().replace(/\s+/g, '-')}/
                  </td>
                  <td className="text-terminal-dim py-1">
                    {product.shortDescription}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
