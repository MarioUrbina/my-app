import './App.css';
import React,{ Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HorizontalBar, Pie} from 'react-chartjs-2';


class App extends Component {
  state={
    respuesta:["prueba1","prueba2","prueba3"],
    departamento:[],
    contador:[],
    departamento2:[],
    contador2:[],
    colores:[],
    data:[],
    opciones:[],
    dataBar:[],
    opcionesBar:[],
    redisResponse:[]
  }

 async peticion(){
    var peticion=await fetch('http://localhost:3023/Departamentos');
    var respuesta =await peticion.json();
    this.setState({respuesta: respuesta});
    var depa=[], num=[];
    for (var c=0; c< respuesta.length;c++){
      depa.push(respuesta[c]._id);
      num.push(respuesta[c].count);
    }
    this.setState({departamento: depa, contador:num});
    console.log(this.state.departamento);
    console.log(this.state.departamento);
    console.log(this.state.respuesta);
  }

  async peticion2(){
     var peticion=await fetch('http://localhost:3023/top');
     var respuesta2 =await peticion.json();
     this.setState({respuesta2: respuesta2});
     var depar=[], nums=[];
     for (var c=0; c< respuesta2.length;c++){
       depar.push(respuesta2[c]._id);
       nums.push(respuesta2[c].total);
     }
     this.setState({departamento2: depar, contador2:nums});
     console.log(this.state.departamento2);
     console.log(this.state.contador2);
   }

   async peticionRedis(){
      var peticion=await fetch('http://localhost:3023/redis');
      var respuestaRedis =await peticion.json();
      var pruebas = respuestaRedis.split(/[:,{}]+/);
      this.setState({redisResponse: pruebas});
      console.log(this.state.redisResponse);
    }

    async edad1(){
       var peticion=await fetch('http://localhost:3023/Edad1');
       var respuestaEdad1 =await peticion.json();
       this.setState({respuestaEdad1: respuestaEdad1});
       console.log(this.state.respuestaEdad1);
     }
     async edad2(){
        var peticion=await fetch('http://localhost:3023/Edad2');
        var respuestaEdad2 =await peticion.json();
        this.setState({respuestaEdad2: respuestaEdad2});
        console.log(this.state.respuestaEdad2);
      }
      async edad3(){
         var peticion=await fetch('http://localhost:3023/Edad3');
         var respuestaEdad3 =await peticion.json();
         this.setState({respuestaEdad3: respuestaEdad3});
         console.log(this.state.respuestaEdad3);
       }
       async edad4(){
          var peticion=await fetch('http://localhost:3023/Edad4');
          var respuestaEdad4 =await peticion.json();
          this.setState({respuestaEdad4: respuestaEdad4});
          console.log(this.state.respuestaEdad4);
        }
        async edad5(){
           var peticion=await fetch('http://localhost:3023/Edad5');
           var respuestaEdad5 =await peticion.json();
           this.setState({respuestaEdad5: respuestaEdad5});
           console.log(this.state.respuestaEdad5);
         }
         async edad6(){
            var peticion=await fetch('http://localhost:3023/Edad6');
            var respuestaEdad6 =await peticion.json();
            this.setState({respuestaEdad6: respuestaEdad6});
            console.log(this.state.respuestaEdad6);
          }
          async edad7(){
             var peticion=await fetch('http://localhost:3023/Edad7');
             var respuestaEdad7 =await peticion.json();
             this.setState({respuestaEdad7: respuestaEdad7});
             console.log(this.state.respuestaEdad7);
           }
           async edad8(){
              var peticion=await fetch('http://localhost:3023/Edad8');
              var respuestaEdad8 =await peticion.json();
              this.setState({respuestaEdad8: respuestaEdad8});
              console.log(this.state.respuestaEdad8);
            }
            async edad9(){
               var peticion=await fetch('http://localhost:3023/Edad9');
               var respuestaEdad9 =await peticion.json();
               this.setState({respuestaEdad9: respuestaEdad9});
               console.log(this.state.respuestaEdad9);
             }
             async edad11(){
                var peticion=await fetch('http://localhost:3023/Edad11');
                var respuestaEdad11 =await peticion.json();
                this.setState({respuestaEdad11: respuestaEdad11});
                console.log(this.state.respuestaEdad11);
              }


  Caracter(){
    var caracter=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero=(Math.random()*15).toFixed(0);
    return caracter[numero];
  }

  colorHexadecimal(){
    var color="";
    for(var i=0;i<6;i++){
      color=color+this.Caracter();
    }
    return "#"+color;
  }

  generarColores(){
    var colores=[];
    for(var i=0; i<this.state.respuesta.length;i++){
      colores.push(this.colorHexadecimal());
    }
    this.setState({colores: colores});
  }
  Grafica(){
    const data={
      labels:this.state.departamento,
      datasets:[{
        data: this.state.contador,
        backgroundColor: this.state.colores
      }]
    };
    const opciones={
      responsive: true,
      maintainAspectRatio: false
    }
    this.setState({data:data, opciones:opciones});
  }

  GraficaBarras()
  {
    var barChart={
      type: 'horizontalBar',
        labels: ["0-10","10-20","20-30","30-40","40-50","50-60","60-70","70-80","80-90","90+"],
        datasets: [{
          data:[this.state.respuestaEdad1,this.state.respuestaEdad2,this.state.respuestaEdad3,
            this.state.respuestaEdad4,this.state.respuestaEdad5,this.state.respuestaEdad6,this.state.respuestaEdad7,
            this.state.respuestaEdad8,this.state.respuestaEdad9,this.state.respuestaEdad11
          ],
          backgroundColor: this.state.colores  }]
      };
      const opcionesb={
        scales: {
          yAxes: [{
            barPercentage: 1
          }],
          xAxes: [{
            barPercentage: 1
          }]

        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        },
        responsive: true,
      maintainAspectRatio: false
      }
    this.setState({dataBar:barChart, opcionesBar:opcionesb});
}



  async componentDidMount(){
    await this.edad1();
    await this.edad2();
    await this.edad3();
    await this.edad4();
    await this.edad5();
    await this.edad6();
    await this.edad7();
    await this.edad8();
    await this.edad9();
    await this.edad11();
    await this.peticion();
    await this.peticion2();
    await this.peticionRedis();
    await this.generarColores();
    this.generarColores();
    this.Grafica();
    this.GraficaBarras();
  }
  render (){
    return(
    <div className="App">
      <header className="App-header">
        <h1>Proyecto No.2 Sistemas Operativos 1</h1>
        <br></br>
        <h3>Departamentos con mas casos reportados</h3>
        <table >
        <thead>
          <tr>
            <th>No</th>
            <th>Departamento</th>
            <th>No. casos </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>{this.state.departamento2[0]}</td>
          <td>{this.state.contador2[0]}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{this.state.departamento2[1]}</td>
          <td>{this.state.contador2[1]}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{this.state.departamento2[2]}</td>
          <td>{this.state.contador2[2]}</td>
        </tr>
      </tbody>
      </table>
      <br></br>
      <h3>Ultimo caso Reportado</h3>
      <table >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ubicacion</th>
            <th>Edad</th>
            <th>Tipo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{this.state.redisResponse[2]}</td>
          <td>{this.state.redisResponse[4]}</td>
          <td>{this.state.redisResponse[6]}</td>
          <td>{this.state.redisResponse[8]}</td>
          <td>{this.state.redisResponse[10]}</td>
        </tr>
      </tbody>
      </table>
      <br></br>
      <h3>Cantidad de afectados por rangos</h3>
      <HorizontalBar data={this.state.dataBar} opciones={this.state.opcionesBar}/>
      <br></br>
      <h3>Departamentos</h3>
      <Pie data={this.state.data} opciones={this.state.opciones}/>

      </header>

    </div>
    )
  }
}

export default App;
