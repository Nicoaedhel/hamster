Template.header.events({
	'click #actionViewNote': function (e) {
		var id = $(e.currentTarget).attr('data');
	    var note = Notes.findOne(({_id:id}));
	   	Session.set('noteId', note._id);
	    Session.set('noteContent', note.content);
	    Session.set('noteDateNote', note.dateNote);
	    Session.set('noteUserId', note.userId);
	    $(".item").removeClass( "active" )
	    $(e.currentTarget).addClass( "active" );
	}
});