// PharmacieProfile.js

// ... (importations et autres parties du code)

import { getById, getData, saveData, deleteData, updateData } from "../../../services";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, Table } from "reactstrap";
import UserHeader from "admin/components/Headers/UserHeader.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Hopital = () => {
  let navigate = useNavigate();
  const [listePatient, setListePatient] = useState([]);
  const [patientEnCours, setPatientEnCours] = useState({ numero_d_assurance_sociale: '', date_de_naissance: '', sexe: '', adresse: '', numero_de_telephone:'', user:'' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData("/patients/");
        setListePatient(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchData();
  }, []);



  const onChangeProduit = (e) => {
    setPatientEnCours({
      ...patientEnCours,
      [e.target.name]: e.target.value
    });
  };


  const getByIdAndSetProduitEnCours = async (id) => {
    try {
      const res = await getById("/patients", id);
      setPatientEnCours({
        ...patientEnCours,
        numero_d_assurance_sociale: res?.data.numero_d_assurance_sociale,
        date_de_naissance: res?.data.date_de_naissance,
        sexe: res?.data.sexe,
        adresse: res?.data.adresse,
        numero_de_telephone:res?.data.numero_de_telephone,
        user:res.data.user,
        id: res?.data?.id
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des données par ID", error);
    }
  };

  const ajouterOuMettreAJourProduit = () => {
    if (patientEnCours.id) {
      // Mise à jour du produit existant dans listePatient
      setListePatient(listePatient.map(prod => prod.id === patientEnCours.id ? patientEnCours : prod));
    } else {
      // Ajout d'un nouveau produit
      setListePatient([...listePatient, { ...patientEnCours, id: Date.now() }]); // Assurez-vous que 'id' est unique
    }
    setPatientEnCours({ numero_d_assurance_sociale: '', date_de_naissance: '', sexe: '', adresse: '', numero_de_telephone:'', user:''  }); // Réinitialiser le formulaire
  };

  const onSubmitInfos = async () => {
    try {
      const method = patientEnCours.id ? 'put' : 'post';
      const url = patientEnCours.id ? `/patients/${patientEnCours.id}/` : '/patients/';

      // Envoi des données du produit en cours
      const response = await (method === 'put' ? updateData : saveData)(url, patientEnCours);

      // Mise à jour de la liste des produits ou traitement de la réponse
      if (method === 'post') {
        // Ajouter le nouveau produit à la liste
        setListePatient([...listePatient, { ...patientEnCours, id: response.data.id }]);
      } else {
        // Mettre à jour le produit existant dans la liste
        setListePatient(listePatient.map(prod => prod.id === patientEnCours.id ? { ...patientEnCours } : prod));
      }

      // Réinitialiser uniquement le formulaire (patientEnCours), pas la liste des produits
      setPatientEnCours({ numero_d_assurance_sociale: '', date_de_naissance: '', sexe: '', adresse: '', numero_de_telephone:'', user:''});

      alert("Produit enregistré avec succès!");

    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);

      alert("Erreur lors de l'enregistrement du produit.");
    }
  };

  const supprimerProduit = async (id) => {
    try {
      // Envoi d'une requête DELETE à votre API en utilisant deleteData
      await deleteData(`/patients/${id}`);

      // Filtrer le produit supprimé de la liste des produits
      const produitsMisAJour = listePatient.filter(produit => produit.id !== id);
      setListePatient(produitsMisAJour);

      //alert("Produit supprimé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
      alert("Erreur lors de la suppression du produit.");
    }
  };

  return (
      <>
        <UserHeader />
        {/* Reste du code... */}

        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Commentaires</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Compte pharmacie</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                      >
                        Settings
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup >
                            <label
                                className="form-control-label"
                                htmlFor="input-username"
                            >
                              Numero d'assurance du patient
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="pharmacie du coeur"
                                id="input-username"
                                placeholder="pharmacie du coeur"
                                type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-email"
                            >
                              Date de naissance
                            </label>
                            <Input
                                className="form-control-alternative"
                                id="input-date"
                                type="date"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                            >
                              Sexe
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="10 metres de la banque BCB"
                                id="input-first-name"
                                placeholder="10 metres de la banque BCB"
                                type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup >
                            <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                            >
                             Adresse du patient
                            </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue="67542317"
                                id="input-last-name"
                                placeholder="67542317"
                                type="text"
                            />
                          </FormGroup>

                        </Col>
                      </Row>

                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Ajouter un produit
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          {/*
                          <Input name="nom" value={patientEnCours.nom} onChange={onChangeProduit} type="text" />
*/}
                          {/*
                          <Input name="description" value={patientEnCours.description} onChange={onChangeProduit} type="text" />
*/}
                          {/*
                          <Input name="prix" value={patientEnCours.prix} onChange={onChangeProduit} type="number" />
*/}









                        </Col>


                        <Col lg="6">
                          <FormGroup >
                            <label
                                className="form-control-label"
                                htmlFor="input-username"
                            >
                              Numero d'assurance du patient
                            </label>
                            <Input
                                name="numero_d_assurance_sociale"
                                value={patientEnCours.numero_d_assurance_sociale}
                                onChange={onChangeProduit}
                                type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-date"
                            >
                              date de naissance
                            </label>
                            <Input name="date_de_naissance" value={patientEnCours.date_de_naissance} onChange={onChangeProduit} type="date"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                            >
                              Sexe
                            </label>
                            <Input name="sexe" value={patientEnCours.sexe} onChange={onChangeProduit} type="text"/>
                          </FormGroup>

                          <FormGroup >
                            <label
                                className="form-control-label"
                                htmlFor="input-last-numero"
                            >
                              Numero de telephone
                            </label>
                            <Input name="numero_de_telephone" value={patientEnCours.numero_de_telephone} onChange={onChangeProduit} type="number" />
                          </FormGroup>


                        </Col>
                        <Col lg="6">
                          <FormGroup >
                            <label
                                className="form-control-label"
                                htmlFor="input-last-adresse"
                            >
                              Adresse
                            </label>
                            <Input name="adresse" value={patientEnCours.adresse} onChange={onChangeProduit} type="text" />
                          </FormGroup>


                          <FormGroup >
                            <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                            >
                              User
                            </label>
                            <Input name="user" value={patientEnCours.user} onChange={onChangeProduit} type="number" />
                          </FormGroup>

                          <Button className = 'btn-success' onClick={onSubmitInfos} >Enregistrer le patient</Button>
                        </Col>
                      </Row>

                    </div>
                    <hr className="my-4" />
                    {/* Description */}

                  </Form>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Listes des produits disponible dans la pharmacie</h3>
              </CardHeader>
              {/* ...autres parties de votre composant... */}

              {/* Tableau des produits */}
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                <tr>
                  <th scope="col">Numero</th>
                  <th scope="col">numero_d_assurance_sociale</th>
                  <th scope="col">date_de_naissance</th>
                  <th scope="col">sexe</th>
                  <th scope="col">adresse</th>
                  <th scope="col">numero_de_telephone</th>
                  <th scope="col">user</th>
                  <th scope="col">Action</th>

                </tr>
                </thead>
                <tbody>
                {Array.isArray(listePatient) && listePatient.map((item, index) => (
                    <tr key={item.id || index}>
                      <td>{index + 1}</td>
                      <td>{item.numero_d_assurance_sociale}</td>
                      <td>{item.date_de_naissance}</td>
                      <td>{item.sexe}</td>
                      <td>{item.adresse}</td>
                      <td>{item.numero_de_telephone}</td>
                      <td>{item.user}</td>
                      <td>{item.Action}</td>
                      <td>
                        {/* Bouton pour modifier le produit */}
                        <Button color="primary" size="sm" onClick={() => getByIdAndSetProduitEnCours(item.id)}>
                          Modifier
                        </Button>
                        <Button color="danger" size="sm" onClick={() => supprimerProduit(item.id)}>
                          Supprimer
                        </Button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </Table>
              {/* ...autres parties de votre composant... */}

            </Card>
          </div>
        </Row>      </>
  );
};

export default Hopital;
