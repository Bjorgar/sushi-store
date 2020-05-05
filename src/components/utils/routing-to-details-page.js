
const routingToDetailsPage = ({ type, id }, history) => {
  
    history.push(`/${type}/${id}`)
  
}

export default routingToDetailsPage;
