import { CloseIcon } from "@/assets";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { cn, removeItemAtIndex } from "@/lib";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  multiple?: boolean;
};

const Dropzone = ({
  name,
  multiple = false,
}: Props) => {
  const { setValue, getValues } = useFormContext();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = acceptedFiles?.map((file: File) =>
        Object.assign(file, { preview: URL.createObjectURL(file) }),
      );
      setValue(name, multiple ? files : files[0]);
    },
    [name, multiple, setValue],
  );

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    multiple,
    ...(multiple && { maxFiles: 5 }),
    noClick: true,
    accept: {
      "text/*": [".csv", ".txt"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/vnd.ms-powerpoint": [".ppt"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [".pptx"],
      "application/pdf": [".pdf"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  return (
    <div className="space-y-2">
      <div
        className={cn(
          "-z-[1] flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-[#CBD5E1] px-4 py-6",
          isDragActive && "bg-gray-100",
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} aria-label="input-file" />
        <div className="flex flex-wrap justify-center gap-3">
          {multiple
            ? !!(getValues()[name] as File[]).length &&
            (getValues()[name] as File[])?.map((file, index) => (
              <FileItem
                key={index}
                file={file}
                onDelete={() => {
                  setValue(
                    name,
                    removeItemAtIndex(getValues()[name] as File[], index),
                  );
                }}
              />
            ))
            : !!getValues()[name] && (
              <FileItem
                file={getValues()[name] as unknown as File}
                onDelete={() => {
                  setValue(name, null);
                }}
              />
            )}
        </div>
        {/* <DocumentIcon className="h-[30px] w-[30px] text-[#737D8F]" /> */}
        <p className="max-w-[290px] text-center text-xs font-medium text-[#8F97A5]">
          {multiple
            ? "Drag and drop some files here, or click to select files. You can upload a maximum of 5 files"
            : "Drag and drop a file here, or click to select file. You can upload a maximum of 1 file"}
        </p>
        <Button type="button" variant="default" onClick={open}>
          Upload file{multiple && "(s)"}
        </Button>
      </div>
    </div>
  );
};

const FileItem = ({ file, onDelete }: { file: File; onDelete: () => void }) => (
  <div className="text-bodyText z-50 flex items-center gap-1 rounded-full bg-[#EFEFEF] px-2 py-1 text-xs font-medium">
    {file.name}
    <button
      className="flex items-center justify-center rounded-md p-[0.125rem] hover:bg-red-500 *:hover:text-white"
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onDelete();
      }}
    >
      <CloseIcon className="h-[12px] w-[12px]" />
    </button>
  </div>
);
export default Dropzone;
