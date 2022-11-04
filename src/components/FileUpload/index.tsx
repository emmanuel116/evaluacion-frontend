import { useRef, useState } from 'react';
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  Modal,
  Icon,
  ImageModal,
  Arrow,
  ArrowRight,
} from './styles';
import {
  AiOutlineCloudUpload,
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import Card from '../Card';

const convertNestedObjectToArray = (nestedObj: FileList) =>
  Object.keys(nestedObj).map((key: any) => nestedObj[key]);

type FileUploadProps = {
  multiple?: boolean;
  updateFilesCb: (arg: File[]) => void;
};

const FileUpload = ({ updateFilesCb, multiple }: FileUploadProps) => {
  const fileInputField = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any>({} as any);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const [modalFiles, setModalFiles] = useState<any>([] as any);

  const handleUploadBtnClick = () => {
    if (fileInputField.current) {
      fileInputField.current.click();
    }
  };

  const addNewFiles = (newFiles: FileList) => {
    for (let file of newFiles) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        if (!multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files: FileList) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { files: newFiles } = target;
    if (newFiles !== null && newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
      handleSetModalFiles(updatedFiles);
    }
  };

  const handleSetModalFiles = (files: FileList) => {
    const newFiles = Object.keys(files).map(
      (fileName: any, index) => {
        let file = files[fileName];
        return {
          id: index,
          url: URL.createObjectURL(file),
        };
      }
    );

    setModalFiles(newFiles);
  };

  const handleSetIndexLess = (i: number) => {
    if (i > 0) {
      setIndex(i - 1);
    } else {
      setIndex(modalFiles.length - 1);
    }
  };
  const handleSetIndexMore = (i: number) => {
    if (i < modalFiles.length - 1) {
      setIndex(i + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <>
      <FileUploadContainer>
        <DragDropText>Drag and drop</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <AiOutlineCloudUpload />
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          multiple={multiple}
        />
      </FileUploadContainer>
      <Card title="Preview" color="">
        <FilePreviewContainer>
          <PreviewList>
            {Object.keys(files).map((fileName, index) => {
              let file = files[fileName];
              return (
                <PreviewContainer key={fileName}>
                  <div>
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />

                    <FileMetaData
                      onClick={() => {
                        setModal(true);
                        setIndex(index);
                      }}
                    >
                      <span>{file.name}</span>
                    </FileMetaData>
                  </div>
                </PreviewContainer>
              );
            })}
          </PreviewList>
        </FilePreviewContainer>
      </Card>
      <Modal show={modal}>
        <Icon>
          <AiOutlineClose onClick={() => setModal(false)} />
        </Icon>
        <Arrow onClick={() => handleSetIndexLess(index)}>
          <AiOutlineArrowLeft />
        </Arrow>
        <ArrowRight onClick={() => handleSetIndexMore(index)}>
          <AiOutlineArrowRight />
        </ArrowRight>
        {modalFiles.length > 0 ? (
          <ImageModal
            src={
              modalFiles.find(
                (file: { id: number; url: string }) =>
                  file.id === index
              ).url
            }
            alt={`file preview`}
          />
        ) : null}
      </Modal>
    </>
  );
};

export default FileUpload;
