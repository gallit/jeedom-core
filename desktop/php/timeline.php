<?php
if (!isConnect()) {
	throw new Exception('{{401 - Accès non autorisé}}');
}
$date = array(
	'start' => date('Y-m-d', strtotime(config::byKey('history::defautShowPeriod') . ' ' . date('Y-m-d'))),
	'end' => date('Y-m-d'),
);
?>

<div class="row row-overflow">
	<div id="timelineOptions" class="reportModeHidden">
		<div class="input-group pull-right" style="display:inline-flex">
			<span class="input-group-btn">
				<select class="form-control roundedLeft input-sm" style="width:300px;" id="sel_timelineFolder">
					<?php
					foreach ((timeline::listFolder()) as $folder) {
						if($folder == 'main'){
							echo '<option value="'.$folder.'">{{Principal}}</option>';
						}else{
							echo '<option value="'.$folder.'">'.$folder.'</option>';
						}
					}
					?>
				</select>
				<a class="btn btn-sm btn-success" id="bt_refreshTimeline"><i class="fas fa-sync"></i> {{Rafraîchir}}
				</a><a id="bt_openCmdHistoryConfigure" class="btn btn-default btn-sm roundedRight"><i class="fas fa-cogs"></i> {{Configuration}}</a>
			</span>
		</div>
	</div>
	<div id="timelineContainer">
		<ul>
		</ul>
	</div>
</div>

<?php
include_file("desktop", "timeline", "js");
include_file('3rdparty', 'moment/lib.moment', 'js');
?>
