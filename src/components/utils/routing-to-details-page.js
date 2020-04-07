
const routingToDetailsPage = ({ type, id }, history) => {
  
  if (type === 'rools') {
    history.push(`/rools/${id}`)
  } else {
    history.push(`/sets/${id}`)
  }

}

export default routingToDetailsPage;
