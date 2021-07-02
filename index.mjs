export default (data, name, field) => {
  const person = data.find(p => p.name === name);
  if (!person) return 'Not found';
  const firstFr = data.find(p => p.name === person.friends[0]);
  const fieldData = firstFr[field];
  if (!fieldData) return 'Not found';
  return { name: firstFr.name, [field]: fieldData };
};
