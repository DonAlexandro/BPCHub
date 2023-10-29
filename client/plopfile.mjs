export default function (plop) {
  plop.setHelper('capitalize', (text) => {
    const firstLetter = text.charAt(0);
    const firstLetterCapitalized = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1).toLowerCase();

    return firstLetterCapitalized + remainingLetters;
  });

  plop.setHelper('toLower', (text) => text.toLowerCase());

  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/{{capitalize name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/{{toLower name}}.styled.ts',
        templateFile: 'plop-templates/component-styled.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/{{capitalize name}}.test.js',
        templateFile: 'plop-templates/component-test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/index.ts',
        templateFile: 'plop-templates/component-index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/interface.ts',
        templateFile: 'plop-templates/component-interface.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/{{capitalize name}}.stories.tsx',
        templateFile: 'plop-templates/component-stories.hbs',
      },
    ],
  });
}
