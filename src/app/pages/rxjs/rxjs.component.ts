import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;
  constructor() {
    // this.retornaOnservable().pipe(
    //   retry(2) //al retry se le pasa un numero que indica la cantidad de intentos, si no se pasan el numero de intentos queda reintentando eternamente
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.log('Error:', error),
    //   () => console.log("Observable completado ok")
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(
                                                valor => console.log(valor) //es igual que --> console.log
                                                );
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
    // throw new Error('Method not implemented.');
  }

  retornaIntervalo(): Observable<number>{
    return interval(500)
                          .pipe( //Los operadores e ejecutan secuencialmente
                            map( valor => valor + 1 ),
                            filter( valor => ( valor % 2 === 0 ? true: false )), //si el filter devuelve treu ejecuta el take sino no lo eejcuta
                            // take(10),
                          );
  }

  retornaOnservable(): Observable<number>{
    let i = -1;
    return new Observable<number>( observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        // console.log('tick');
        if( i === 4){
          clearInterval( intervalo );
          observer.complete();          
        }
        if( i === 2 ){
          // i=0;
          // console.log('i = 2 ');
          clearInterval( intervalo );
          observer.error("i es igual a 2");
        }
      }, 1000);
    });
  }

}
