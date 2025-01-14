import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor';
import './CustomProposalTab.css'; // Asegúrate de crear este archivo para los estilos personalizados

const CustomProposalTab = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('https://studiofco.vteximg.com.br/arquivos/ids/1507825-4000-4284/-stfco-producto-Blazer-NARANJA-S301805A-1.jpg?v=638276314124770000');

  const openEditor = () => {
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
  };

  return (
    <Container className="custom-proposal-tab-container">
      <Button variant="dark outline-dark border" onClick={openEditor}>
      Personaliza tu producto
      </Button>
      {isEditorOpen && (
        <FilerobotImageEditor
          source={imageSrc}
          onSave={(editedImageObject, designState) => {
            console.log('saved', editedImageObject, designState);
            setImageSrc(editedImageObject.imageBase64);
            closeEditor();
          }}
          onClose={closeEditor}
          tabsIds={[TABS.ADJUST, TABS.FILTERS, TABS.FINETUNE, TABS.ANNOTATE, TABS.WATERMARK]}
          defaultTabId={TABS.ANNOTATE}
          defaultToolId={TOOLS.TEXT}
        />
      )}
    </Container>
  );
};

export default CustomProposalTab;