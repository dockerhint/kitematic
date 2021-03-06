Template.dashboardImagesLayout.rendered = function () {
  Meteor.setInterval(function () {
    $('.header .icons a').tooltip();
  }, 1000);
};

Template.dashboardImagesLayout.events({
  'click .btn-create-app': function () {
    $('#modal-create-app').modal('show');
    $('#form-create-app').find('input[name="imageId"]').val(this._id);
    $('#image-picker').hide();
  },
  'click .btn-folder': function () {
    var exec = require('exec');
    exec(['open', this.path], function (err) {
      if (err) { throw err; }
    });
  },
  'click .btn-rebuild': function () {
    $('.header .icons a').tooltip('hide');
    ImageUtil.rebuild(this._id, function (err) {
      if (err) { console.error(err); }
    });
  }
});
