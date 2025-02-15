import { CloseIcon } from "@/assets";
import { useDropzone } from "react-dropzone";
import { ReactNode, useCallback } from "react";
import { cn, removeItemAtIndex } from "@/lib";
import { Path, PathValue, useFormContext } from "react-hook-form";
import { FieldValues } from "react-hook-form";

type Props<FormType extends FieldValues> = {
  name: keyof FormType;
  multiple?: boolean;
  icon: ReactNode
};

const Dropzone = <FormType extends Record<string, unknown>>({
  name,
  multiple = false,
  icon
}: Props<FormType>) => {
  const { setValue, getValues } = useFormContext<FormType>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue(
        (name as Path<FormType>),
        multiple ? acceptedFiles as PathValue<FormType, Path<FormType>> : acceptedFiles[0] as PathValue<FormType, Path<FormType>>,
        { shouldValidate: true }
      );
    },
    [name, multiple, setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
    ...(multiple && { maxFiles: 5 }),
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
          "-z-[1] flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-[#D1D1CE] px-4 py-6",
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
                onDelete={() => setValue(
                  name as Path<FormType>,
                  removeItemAtIndex(getValues()[name] as unknown[], index) as PathValue<FormType, Path<FormType>>,
                )}
              />
            ))
            : !!getValues()[name] && (
              <FileItem
                file={getValues()[name] as unknown as File}
                onDelete={() => setValue(name as Path<FormType>, null as PathValue<FormType, Path<FormType>>)}
              />
            )}
        </div>
        {icon}
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
