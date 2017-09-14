import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;
declare var Chartist: any;

@Component({
  selector: 'cat-page',
  templateUrl: './alpha.html'
})

export class DashboardsAlpha implements OnInit {
  ngOnInit() {

    $( function() {
        // caroussel

        $('#owl1').owlCarousel({
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

        $('#owl2').owlCarousel({
            stagePadding: 50,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        $('#owl3').owlCarousel({
            items: 4,
            lazyLoad: true,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

        $('#owl4').owlCarousel({
            items: 1,
            margin: 10,
            autoHeight: true
        });

        $('#owl5').owlCarousel({
            items: 1,
            merge: true,
            loop: true,
            margin: 10,
            video: true,
            lazyLoad: true,
            center: true,
            responsive: {
                480: {
                    items: 2
                },
                600: {
                    items: 4
                }
            }
        });
        ///////////////////////////////////////////////////////////
      // jquery ui tri
      $('#left-col, #right-col, #bottom-col').each(function(){
        $(this).sortable({
          // connection container
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

          // sauvegarde de l'ordre des section
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
      // custom scroll
      if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
        $('.custom-scroll').each(function() {
          $(this).jScrollPane({
            contentWidth: '100%',
            autoReinitialise: true,
            autoReinitialiseDelay: 100
          });
          var api = $(this).data('jsp'),
            throttleTimeout;
          $(window).bind('resize', function() {
            if (!throttleTimeout) {
              throttleTimeout = setTimeout(function() {
                api.reinitialise();
                throttleTimeout = null;
              }, 50);
            }
          });
        });
      }

      ///////////////////////////////////////////////////////////
      // slider
      $("#slider-1").ionRangeSlider({
        min: 0,
        max: 16000,
        from: 12000,
        step: 1000,
        grid: true,
        grid_num: 8
      });

      $("#slider-2").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        from_min: 10,
        from_max: 30,
        from_shadow: true,
        to: 60,
        to_min: 50,
        to_max: 70,
        to_shadow: true,
        grid: true,
        grid_num: 10
      });

    } );

  }
}

