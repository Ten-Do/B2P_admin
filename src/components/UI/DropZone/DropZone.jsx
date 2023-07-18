import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import classes from "./DropZone.module.scss";

export default function DropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    acceptedFiles.forEach((file) => {
      alert(JSON.stringify(file));
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    accept: { "image/*": [".png", ".svg", ".jpeg", ".jpg"] },
  });

  return (
    <div
      {...getRootProps()}
      className={
        isDragActive
          ? [classes.dropzone, classes.active].join(" ")
          : classes.dropzone
      }
    >
      <input {...getInputProps()} />
      <div className={classes.dropzone__box}>
        <p>Перетащите изображение сюда</p>
        <p>или</p>
        <button className={classes.dropzone__btn} onClick={open}>
          Выбрать изображение
        </button>
      </div>
    </div>
  );
}
