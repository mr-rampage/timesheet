import $ from "jqlite/jqlite.min"

function createFormComponent(config) {
  const label = $(`<label><span>${config.prompt || ''}</span></label>`);
  const element = createInput(config);
  return label.append(element);
}

function createInput(config) {
  switch(config.type) {
    case 'text': return createTextInput(config);
    default: return $('div');
  };
}

function createTextInput(config) {
  const template = `<input type="${config.type}" name="${config.name}" value="${config.value || ''}"/>`;
  return $(template);
}

function domFactory(config) {
  return createFormComponent(config)[0];
}

export default domFactory;
