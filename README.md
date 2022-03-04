# MicrofrontendMonorepo

Implementazione microfrontend con libreria condivisa

## Architrettura

Abbiamo 4 componenti:

- Shell (Microfrontend)
- Dashboard (Microfrontend)
- Admin (Microfrontend)
- Shared (Libreria condivisa contenente servizio shared)

## Note sulla condivisione delle librerie

Ecco i passi per condividere una libreria presente nel workspace:

1. Modificare la sezione ```path``` del file tsconfig.json affinchè contenga il riferimento alla libreria condivisa:
```
    "paths": {
      "shared": [
        "projects/shared/src/public-api.ts",
      ]
    }
```
2. Definire nei vari webpack.config.js le librerie da condividere:
```
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['shared']);
```
3. Definire una importazione corretta delle varie componenti della libreria shared, nei vari microfrontend:
```
import { LanguageConfig, SharedService } from 'shared';
```
Non usare mai il percorso fisico, altrimenti la condivisione ( e quindi la natura singleton dei servizi) non avviene.

4. Definire i servizi angular presenti nella libreria shared, tramite factory, in modo tale da realizzare una natura singleton del servizio stesso:
```
@Injectable({
  deps: [[new Optional(), new SkipSelf(), SharedService]],
  providedIn: 'root',
  useFactory: (instance: SharedService | null) => instance || new SharedService(),
})
export class SharedService {
```
Se il servizio SharedService accetta nel suo costruttore altri parametri, allora bisognerà modificare la factory. Infatti, supponiamo che accetti un HttpClient come parametro, allora avremo:
```
@Injectable({
  deps: [[new Optional(), new SkipSelf(), SharedService], HttpClient],
  providedIn: 'root',
  useFactory: (instance: SharedService | null, httpClient: HttpClient) => instance || new SharedService(httpClient),
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }
  ....
```
