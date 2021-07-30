export const formattedDate = (date: string): string => {
  const dateFormmated = new Date(date).toLocaleDateString('pt-BR', 
  {
    day: '2-digit',
    month: '2-digit',
    year: "numeric",
  })

    return dateFormmated;
}