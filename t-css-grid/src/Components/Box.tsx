type props = {
  contenido: string;
  clase?: string;
};

export const Box = ({ contenido, clase = "" }: props) => {
  const clases: string =
    "bg-red-500  grid place-content-center rounded-lg text-white fondt-bold border-2 border-red-600 text-4xl";
  return <div className={clase + " " + clases}>{contenido}</div>;
};
