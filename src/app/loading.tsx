export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-t-4 border-b-4 border-customGreen rounded-full w-12 h-12 animate-spin mr-3"></div>
      <span className="text-xl text-customGreen font-semibold">Carregando...</span>
    </div>
  );
}