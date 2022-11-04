import { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import Button from '../../components/Button';

const Upload = () => {
  const [arrayFiles, setFiles] = useState<File[]>([]);

  const updateUploadedFiles = (files: File[]) => setFiles(files);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(arrayFiles);
    //logica para almacenar imagenes en storage
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload multiple updateFilesCb={updateUploadedFiles} />
        <Button type="submit">Subir imagenes</Button>
      </form>
    </div>
  );
};

export default Upload;
