import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var swal: any;

@Component({
  selector: 'cat-page',
  templateUrl: './produit.html'
})

export class ProduitComponent implements OnInit {
  ngOnInit() {

    $(function() {


        ///////////////////////////////////////////////////////////
        // jquery ui sortable
        $('#left-col, #right-col, #bottom-col').each(function(){
            $(this).sortable({
                // connect left and right containers
                connectWith: '.cat__core__sortable',
                tolerance: 'pointer',
                scroll: true,

                // set initial order from localStorage
                create: function () {

                    var that = $(this),
                        id = $(this).attr('id'),
                        orderLs = localStorage.getItem('order-' + id);

                    if (orderLs) {
                        var order = orderLs.split(',');

                        $.each(order, function(key, val){
                            var el = $('[order-id=' + val + ']');
                            that.append(el);
                        });
                    }

                },

                // save order state on order update to localStorage
                update: function () {
                    var orderArray = $(this).sortable('toArray', {attribute: 'order-id'}),
                        prefix = $(this).attr('id');

                    localStorage.setItem('order-' + prefix, orderArray);
                },

                // handler
                handle: ".card-header"
            });
        });

        ///////////////////////////////////////////////////////////
        // reset dashboard
        $('.reset-button').on('click', function(){
            localStorage.removeItem('order-left-col');
            localStorage.removeItem('order-right-col');
            localStorage.removeItem('order-bottom-col');
            setTimeout(function () {
                location.reload();
            }, 500)
        });

        ///////////////////////////////////////////////////////////
        // card controls
        $('.cat__core__sortable__collapse, .cat__core__sortable__uncollapse').on('click', function(){
            $(this).closest('.card').toggleClass('cat__core__sortable__collapsed');
        });
        $('.cat__core__sortable__close').on('click', function(){
            $(this).closest('.card').remove();
            $('.tooltip').remove();
        });

        // header double click
        $('.cat__core__sortable .card-header').on('dblclick', function() {
            $(this).closest('.card').toggleClass('cat__core__sortable__collapsed');
        });

      ///////////////////////////////////////////////////////////
      // ADJUSTABLE TEXTAREA
      autosize($('.adjustable-textarea'));

      ///////////////////////////////////////////////////////////
      // CALENDAR
      $('.example-calendar-block').fullCalendar({
        //aspectRatio: 2,
        height: 450,
        header: {
          left: 'prev, next',
          center: 'title',
          right: 'month, agendaWeek, agendaDay'
        },
        buttonIcons: {
          prev: 'none fa fa-arrow-left',
          next: 'none fa fa-arrow-right',
          prevYear: 'none fa fa-arrow-left',
          nextYear: 'none fa fa-arrow-right'
        },
        Actionable: true,
        eventLimit: true, // allow "more" link when too many events
        viewRender: function(view, element) {
          if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
            $('.fc-scroller').jScrollPane({
              autoReinitialise: true,
              autoReinitialiseDelay: 100
            });
          }
        },
        eventClick: function(calEvent, jsEvent, view) {
          if (!$(this).hasClass('event-clicked')) {
            $('.fc-event').removeClass('event-clicked');
            $(this).addClass('event-clicked');
          }
        },
        defaultDate: '2016-05-12',
        events: [
          {
            title: 'All Day Event',
            start: '2016-05-01',
            className: 'fc-event-success'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-05-09T16:00:00',
            className: 'fc-event-default'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2016-05-16T16:00:00',
            className: 'fc-event-success'
          },
          {
            title: 'Conference',
            start: '2016-05-11',
            end: '2016-05-14',
            className: 'fc-event-danger'
          }
        ]
      });

      ///////////////////////////////////////////////////////////
      // SWAL ALERTS
      $('.swal-btn-success').click(function(e){
        e.preventDefault();
        swal({
          title: "Following",
          text: "Now you are following Artour Scott",
          type: "success",
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok"
        });
      });

      $('.swal-btn-success-2').click(function(e){
        e.preventDefault();
        swal({
          title: "Friends request",
          text: "Friends request was succesfully sent to Artour Scott",
          type: "success",
          confirmButtonClass: "btn-success",
          confirmButtonText: "Ok"
        });
      });

    });

  }
}

