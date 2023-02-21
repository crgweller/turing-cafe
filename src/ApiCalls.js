const fetchReservations = () => {
  const fetchAll = fetch("http://localhost:3001/api/v1/reservations")
      .then(response => response.json())
  return fetchAll
}

export { fetchReservations }