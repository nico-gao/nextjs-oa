interface CharacterDataProps {
  name: string;
  image: string;
}

export default function CharacterCard({ name, image }: CharacterDataProps) {
  return (
    <li className="flex flex-col w-1/6 px-2">
      <img src={image} className="w-full h-full" />
      <p>{name}</p>
    </li>
  );
}
