import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var swal: any;

@Component({
  selector: 'cat-page',
  templateUrl: './profile.html'
})

export class AppsProfile implements OnInit {
  ngOnInit() {

    $(function() {

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

