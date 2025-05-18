import React from "react";

export interface AvatarProps {
  name: string | null | undefined;
}

const Avatar = (props: AvatarProps) => {
  const { name } = props;
  const getInitial = () => {
    const arr = name?.split(" ");
    console.log(name);
    return arr?.reduce((aggr: string, item: string) => {
      return aggr + item[0];
    }, "");
  };

  return (
    <div className="text-amber-900 text-sm font-bold">
      {getInitial() || "UN"}
    </div>
  );
};

export default Avatar;
