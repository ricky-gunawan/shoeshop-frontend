import { TrashIcon } from "@heroicons/react/outline";

type DataCardProps = {
  title1: string;
  field1: string;
  title2: string;
  field2: string;
};

export const DataCard = ({ title1, title2, field1, field2 }: DataCardProps) => {
  return (
    <div className="flex rounded-lg bg-neutral-50 p-2 shadow-md">
      <div className="grow">
        <div>
          <span className="pl-1 text-sm">{title1}</span>
          <div className="rounded-sm bg-gray-300 p-1 line-clamp-1">{field1}</div>
        </div>
        <div className="mt-2">
          <span className="pl-1 text-sm">{title2}</span>
          <div className="rounded-sm bg-gray-300 p-1 line-clamp-1">{field2}</div>
        </div>
      </div>
      <div className="flex w-fit items-center border-l px-3 pt-3">
        <TrashIcon className="h-6 w-6 text-red-500" />
      </div>
    </div>
  );
};
