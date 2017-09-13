import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './peity.html'
})

export class ChartsPeity implements OnInit {
  ngOnInit() {

    $(function () {

      // COLOR BLUE
      var blue = {
        color1: '#01a8fe',
        color2: '#72cfff',
        color3: '#c6eafd'
      };

      $('[data-plugin=peityPie][data-color=blue]').peity("pie", {
        fill: [blue.color1, blue.color2, blue.color3],
        radius: 11
      });

      $('[data-plugin=peityDonut][data-color=blue]').peity("donut", {
        fill: [blue.color1, blue.color2, blue.color3],
        radius: 11
      });

      $('[data-plugin=peityLine][data-color=blue]').peity("line", {
        fill: [blue.color2],
        stroke: blue.color1,
        height: 22,
        strokeWidth: 1,
        width: 44
      });

      $('[data-plugin=peityBar][data-color=blue]').peity("bar", {
        fill: [blue.color1],
        height: 22,
        width: 44
      });



      // COLOR GREEN
      var green = {
        color1: '#46be8a',
        color2: '#79dcb1',
        color3: '#b1f8d9'
      };

      $('[data-plugin=peityPie][data-color=green]').peity("pie", {
        fill: [green.color1, green.color2, green.color3],
        radius: 11
      });

      $('[data-plugin=peityDonut][data-color=green]').peity("donut", {
        fill: [green.color1, green.color2, green.color3],
        radius: 11
      });

      $('[data-plugin=peityLine][data-color=green]').peity("line", {
        fill: [green.color2],
        stroke: green.color1,
        height: 22,
        strokeWidth: 1,
        width: 44
      });

      $('[data-plugin=peityBar][data-color=green]').peity("bar", {
        fill: [green.color1],
        height: 22,
        width: 44
      });



      // UPDATE BLUE PEITY

      var example11 = $("#example11").peity("line", {
        fill: [blue.color2],
        stroke: blue.color1,
        height: 22,
        strokeWidth: 1,
        width: 44
      });

      setInterval(function() {
        var random = Math.round(Math.random() * 10);
        var values = example11.text().split(",");
        values.shift();
        values.push(random);
        example11.text(values.join(",")).change()
      }, 1000);

      var example12 = $("#example12").peity("bar", {
        fill: [blue.color1],
        height: 22,
        width: 44
      });

      setInterval(function() {
        var random = Math.round(Math.random() * 10);
        var values = example12.text().split(",");
        values.shift();
        values.push(random);
        example12.text(values.join(",")).change()
      }, 1000);



      // UPDATE GREEN PEITY

      var example21 = $("#example21").peity("line", {
        fill: [green.color2],
        stroke: green.color1,
        height: 22,
        strokeWidth: 1,
        width: 44
      });

      setInterval(function() {
        var random = Math.round(Math.random() * 10);
        var values = example21.text().split(",");
        values.shift();
        values.push(random);
        example21.text(values.join(",")).change()
      }, 1000);

      var example22 = $("#example22").peity("bar", {
        fill: [green.color1],
        height: 22,
        width: 44
      });

      setInterval(function() {
        var random = Math.round(Math.random() * 10);
        var values = example22.text().split(",");
        values.shift();
        values.push(random);
        example22.text(values.join(",")).change()
      }, 1000);

    });
    
  }
}

