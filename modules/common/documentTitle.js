export default title => {
  const nextTitle = title ? title + ' | Anyám Főzte' : 'Anyám Főzte';
  if (nextTitle !== document.title) {
    document.title = nextTitle;
  }
}