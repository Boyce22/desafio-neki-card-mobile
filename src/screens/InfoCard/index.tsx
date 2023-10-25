import { Container, ContainerForm } from './styles'
import { FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { CardUser } from '../../components/CardUser';
import { ModalDelete } from '../../components/ModalDelete';
import { CollaboratorDTO } from '../../dto/CollaboratorDTO';
import { collaboratorDelete, fetchAllCollaborators } from '../../utils/CollaboratorService';
import { FormCollaboratorEdit } from '../../components/FormCollaboratorEdit';
import { ToastAndroid } from 'react-native'

export function InfoCard() {

  const [isVisible, setIsVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [collaborators, setCollaborators] = useState<CollaboratorDTO[]>([])
  const [itemSelected, setItemSelected] = useState(0)

  function handleToggleVisibility(id: number) {
    setIsVisible((prevState) => !prevState)
    setItemSelected(id)
  }

  function handleToggleEditing(id: number) {
    setIsEditing((prevState) => !prevState)
    setItemSelected(id)
  }

  async function fetchCollaborators() {
    const response = await fetchAllCollaborators()
    setCollaborators(response)
  }

  async function handleDeleteCollaborator() {
    if (itemSelected != null) {
      collaboratorDelete(itemSelected)
      setItemSelected(0)
      setIsVisible(false)
      ToastAndroid.show("Collaborator deleted!", ToastAndroid.SHORT);
    }
  }

  useEffect(() => {
    fetchCollaborators()
  }, [isVisible, isEditing])

  return (
    <>
      {!isEditing &&
        <Container>
          <FlatList
            data={collaborators}
            renderItem={({ item }) => (
              <CardUser
                collaborator={item}
                onDeleteCollaborator={() => handleToggleVisibility(item.id)}
                onEditCollaborator={() => handleToggleEditing(item.id)}
              />
            )}
          />
          {isVisible &&
            <ModalDelete
              title='Delete Collaborator'
              subtitle='Are you sure you want to delete this collaborator?'
              onPressLeft={() => setIsVisible(false)}
              onPressRight={() => handleDeleteCollaborator()}
            />
          }

        </Container>
      }
      {isEditing &&
        <ContainerForm>
          <FormCollaboratorEdit
            collaboradorId={itemSelected}
            onBack={() => setIsEditing(false)}
          />
        </ContainerForm>
      }
    </>
  );
}