var exec = require('exec');

Template.dashboardSingleImage.rendered = function () {
  Meteor.setInterval(function () {
    $('.btn-icon').tooltip();
  }, 1000);
};

Template.dashboardSingleImage.events({
  'click .btn-create-app': function () {
    $('#modal-create-app').modal('show');
    $('#form-create-app').find('input[name="imageId"]').val(this._id);
    $('#image-picker').hide();
  },
  'click .btn-folder': function () {
    exec(['open', this.path], function (err) {
      if (err) { throw err; }
    });
  },
  'click .btn-rebuild': function (e) {
    e.preventDefault();
    $('.btn-icon').tooltip('hide');
    ImageUtil.rebuild(this._id, function (err) {
      if (err) { console.error(err); }
    });
  }
});
