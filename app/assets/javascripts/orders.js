(function($, document) {
  $().ready(function() {
    var orderData = $('#order-data'),
      typeDdl = $('#type-ddl-menu'),
      sizeDdl = $('#size-ddl-menu'),
      orderDdl = $('#order-ddl-menu');

    ajaxOrders(coffeeshop.getUrlParams($(this).context.URL).page || 1);

    // Assume response time is 2 second, to protect server overload if keep refreshing.
    var dAjaxOrders = coffeeshop.debounce(ajaxOrders, 2000, true);
    $('#refresh-list').click(function() {
      dAjaxOrders();
    });

    $(orderData).on('click', 'ul.pagination a', function(e) {
      e.preventDefault();
      ajaxOrders(parseInt(coffeeshop.getUrlParams($(this).context.URL).page || 1));
    });

    function ajaxOrders(page) {
      var page = (page || 1),
        type = $('#type-ddl-menu').data('q') || '',
        size = $('#size-ddl-menu').data('q') || '';
      $('span.loading-icon').show();
      $.get($(orderData).data('url'), {
        page: page,
        type: type,
        size: size
      }).done(function(data) {
        $(orderData).html(data);
        var msg = 'Order Listing load successfully: ';
        type && (msg += '[Drink type : ' + type + '], ');
        size && (msg += '[Cup size : ' + size + '], ');
        msg += '[page ' + page + '].';
        coffeeshop.showNotice(msg, 4000);
      }).fail(function() {
        coffeeshop.showError('Order Listing load fail!');
      }).always(function() {
        $('span.loading-icon').hide();
      });
    }

  });
})(jQuery, document);
