# AlgoPageAngular

## Backlog

- [ ] Usar Plotly para ver los algoritmos


Lo que queria hacer aca era una pagina que muestre animaciones the differentes algoritmos usando plotly.

https://plotly.com/javascript/animations/


Resource: https://stackoverflow.com/questions/69895552/not-supported-keyword-id-use-id-for-schema-id-tslint-ng-add-angular-e


## Deployment

```
ng build --configuration=production --base-href "https://nenewang.github.io/algo-page-angular/"
sudo npm install -g angular-cli-ghpages
ngh --dir dist/algo-page-angular
```

Deployed at:

```
https://nenewang.github.io/algo-page-angular
```

Attempted: Failed
```
ng add angular-cli-ghpages
ng add @angular-eslint/schematics@16
ng deploy
```