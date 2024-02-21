import clsx from 'clsx';

export default function ProductSkeleton({ isLoading }: { isLoading?: boolean }) {
  return (
    <div className="flex flex-col shadow-lg bg-slate-50 rounded-lg overflow-hidden max-w-md">
      <div
        className={clsx(
          'relative h-52 bg-customDarkBlue2',
          {
            'animate-pulse': isLoading,
          }
        )}
      />
      <div className="p-4 w-full">
        <h2
          className={clsx(
            'text-lg font-semibold mb-2 truncate text-customDarkBlue',
            {
              'animate-pulse': isLoading,
            }
          )}
        >
          {isLoading ? 'Carregando...' : ''}
        </h2>
        <div className="flex flex-col mt-5">
          <p
            className={clsx(
              'text-customPurple font-semibold text-lg',
              {
                'animate-pulse': isLoading,
              }
            )}
          >
            {isLoading ? 'Carregando...' : ''}
          </p>
          <button
            className={clsx(
              'bg-customDarkBlue2 text-customLightGreen px-1 py-2 rounded-lg hover:bg-slate-700 transition duration-300',
              {
                'animate-pulse': isLoading,
              }
            )}
          >
            {isLoading ? 'Carregando...' : 'Adicionar ao Carrinho'}
          </button>
        </div>
      </div>
    </div>
  );
}
