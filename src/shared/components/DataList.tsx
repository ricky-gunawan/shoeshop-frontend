import DataCard from "@/shared/components/DataCard";

type DataListProps = {
  data: any[];
  keyStr: string;
  title1: string;
  title2: string;
  field1: string;
  field2: string;
};

const DataList = ({ data, keyStr, title1, title2, field1, field2 }: DataListProps) => {
  return (
    <div className="grid gap-2 p-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <DataCard key={item[keyStr]} title1={title1} title2={title2} field1={item[field1]} field2={item[field2]} />
      ))}
    </div>
  );
};

export default DataList;
