﻿/************************************* 
 * Vibrotactile_Experiment_Test *
 *************************************/


// store info about the experiment session:
let expName = 'vibrotactile_experiment_test';  // from the Builder filename that created this script
let expInfo = {
    'participant': '01',
    'run': '01',
    'trial_duration': '2',
    'standard_vibration_freq': '20',
    'target_vibration_diff': '10',
    'standard_checkerboard_freq': '8',
    'target_checkerboard_diff': '4',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initialisationRoutineBegin());
flowScheduler.add(initialisationRoutineEachFrame());
flowScheduler.add(initialisationRoutineEnd());
flowScheduler.add(start_experimentRoutineBegin());
flowScheduler.add(start_experimentRoutineEachFrame());
flowScheduler.add(start_experimentRoutineEnd());
flowScheduler.add(triggerRoutineBegin());
flowScheduler.add(triggerRoutineEachFrame());
flowScheduler.add(triggerRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(end_experimentRoutineBegin());
flowScheduler.add(end_experimentRoutineEachFrame());
flowScheduler.add(end_experimentRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.1post4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "initialisation"
  initialisationClock = new util.Clock();
  // Run 'Begin Experiment' code from initialisation_flicker
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "start_experiment"
  start_experimentClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Viberator Test',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trigger"
  triggerClock = new util.Clock();
  // Initialize components for Routine "inter_stimulus_intevral"
  inter_stimulus_intevralClock = new util.Clock();
  wait = new visual.TextStim({
    win: psychoJS.window,
    name: 'wait',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "cue"
  cueClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "cue_to_target"
  cue_to_targetClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "checkerboard"
  checkerboardClock = new util.Clock();
  stimulus_fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimulus_fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "response_period"
  response_periodClock = new util.Clock();
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_experiment"
  end_experimentClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Run Complete!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_button = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function initialisationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initialisation' ---
    t = 0;
    initialisationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    initialisationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('initialisation.started', globalClock.getTime());
    initialisationMaxDuration = null
    // keep track of which components have finished
    initialisationComponents = [];
    
    initialisationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function initialisationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initialisation' ---
    // get current time
    t = initialisationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    initialisationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function initialisationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initialisation' ---
    initialisationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('initialisation.stopped', globalClock.getTime());
    // the Routine "initialisation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function start_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_experiment' ---
    t = 0;
    start_experimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    start_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('start_experiment.started', globalClock.getTime());
    start_experimentMaxDuration = null
    // keep track of which components have finished
    start_experimentComponents = [];
    start_experimentComponents.push(text);
    start_experimentComponents.push(key_resp);
    
    start_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function start_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_experiment' ---
    // get current time
    t = start_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function start_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_experiment' ---
    start_experimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_experiment.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "start_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function triggerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trigger' ---
    t = 0;
    triggerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    triggerMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('trigger.started', globalClock.getTime());
    triggerMaxDuration = null
    // keep track of which components have finished
    triggerComponents = [];
    
    triggerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function triggerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trigger' ---
    // get current time
    t = triggerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    triggerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function triggerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trigger' ---
    triggerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trigger.stopped', globalClock.getTime());
    // the Routine "trigger" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial_info.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(inter_stimulus_intevralRoutineBegin(snapshot));
      trialsLoopScheduler.add(inter_stimulus_intevralRoutineEachFrame());
      trialsLoopScheduler.add(inter_stimulus_intevralRoutineEnd(snapshot));
      trialsLoopScheduler.add(cueRoutineBegin(snapshot));
      trialsLoopScheduler.add(cueRoutineEachFrame());
      trialsLoopScheduler.add(cueRoutineEnd(snapshot));
      trialsLoopScheduler.add(cue_to_targetRoutineBegin(snapshot));
      trialsLoopScheduler.add(cue_to_targetRoutineEachFrame());
      trialsLoopScheduler.add(cue_to_targetRoutineEnd(snapshot));
      trialsLoopScheduler.add(checkerboardRoutineBegin(snapshot));
      trialsLoopScheduler.add(checkerboardRoutineEachFrame());
      trialsLoopScheduler.add(checkerboardRoutineEnd(snapshot));
      trialsLoopScheduler.add(response_periodRoutineBegin(snapshot));
      trialsLoopScheduler.add(response_periodRoutineEachFrame());
      trialsLoopScheduler.add(response_periodRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function inter_stimulus_intevralRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'inter_stimulus_intevral' ---
    t = 0;
    inter_stimulus_intevralClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    inter_stimulus_intevralMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('inter_stimulus_intevral.started', globalClock.getTime());
    inter_stimulus_intevralMaxDuration = 4
    // keep track of which components have finished
    inter_stimulus_intevralComponents = [];
    inter_stimulus_intevralComponents.push(wait);
    
    inter_stimulus_intevralComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function inter_stimulus_intevralRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'inter_stimulus_intevral' ---
    // get current time
    t = inter_stimulus_intevralClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > inter_stimulus_intevralMaxDuration) {
        inter_stimulus_intevralMaxDurationReached = true
        continueRoutine = false
    }
    
    // *wait* updates
    if (t >= 0.0 && wait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait.tStart = t;  // (not accounting for frame time here)
      wait.frameNStart = frameN;  // exact frame index
      
      wait.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (wait.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wait.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    inter_stimulus_intevralComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function inter_stimulus_intevralRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'inter_stimulus_intevral' ---
    inter_stimulus_intevralComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('inter_stimulus_intevral.stopped', globalClock.getTime());
    if (inter_stimulus_intevralMaxDurationReached) {
        routineTimer.add(inter_stimulus_intevralMaxDuration);
    } else {
        routineTimer.add(-4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cue' ---
    t = 0;
    cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    cueMaxDurationReached = false;
    // update component parameters for each repeat
    text_3.setText(cue_text);
    psychoJS.experiment.addData('cue.started', globalClock.getTime());
    cueMaxDuration = null
    // keep track of which components have finished
    cueComponents = [];
    cueComponents.push(text_3);
    
    cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cue' ---
    // get current time
    t = cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cue' ---
    cueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cue.stopped', globalClock.getTime());
    if (cueMaxDurationReached) {
        routineTimer.add(cueMaxDuration);
    } else {
        routineTimer.add(-0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function cue_to_targetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cue_to_target' ---
    t = 0;
    cue_to_targetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    cue_to_targetMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('cue_to_target.started', globalClock.getTime());
    cue_to_targetMaxDuration = null
    // keep track of which components have finished
    cue_to_targetComponents = [];
    cue_to_targetComponents.push(text_4);
    
    cue_to_targetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function cue_to_targetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cue_to_target' ---
    // get current time
    t = cue_to_targetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cue_to_targetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function cue_to_targetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cue_to_target' ---
    cue_to_targetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cue_to_target.stopped', globalClock.getTime());
    if (cue_to_targetMaxDurationReached) {
        routineTimer.add(cue_to_targetMaxDuration);
    } else {
        routineTimer.add(-1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function checkerboardRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'checkerboard' ---
    t = 0;
    checkerboardClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    checkerboardMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('checkerboard.started', globalClock.getTime());
    checkerboardMaxDuration = 0.5
    // keep track of which components have finished
    checkerboardComponents = [];
    checkerboardComponents.push(stimulus_fixation);
    
    checkerboardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function checkerboardRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'checkerboard' ---
    // get current time
    t = checkerboardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > checkerboardMaxDuration) {
        checkerboardMaxDurationReached = true
        continueRoutine = false
    }
    
    // *stimulus_fixation* updates
    if (t >= 0.0 && stimulus_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_fixation.tStart = t;  // (not accounting for frame time here)
      stimulus_fixation.frameNStart = frameN;  // exact frame index
      
      stimulus_fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stimulus_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimulus_fixation.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    checkerboardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function checkerboardRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'checkerboard' ---
    checkerboardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('checkerboard.stopped', globalClock.getTime());
    if (checkerboardMaxDurationReached) {
        routineTimer.add(checkerboardMaxDuration);
    } else {
        routineTimer.add(-0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function response_periodRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response_period' ---
    t = 0;
    response_periodClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    response_periodMaxDurationReached = false;
    // update component parameters for each repeat
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('response_period.started', globalClock.getTime());
    response_periodMaxDuration = 1.5
    // keep track of which components have finished
    response_periodComponents = [];
    response_periodComponents.push(response);
    
    response_periodComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}

function response_periodRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response_period' ---
    // get current time
    t = response_periodClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > response_periodMaxDuration) {
        response_periodMaxDurationReached = true
        continueRoutine = false
    }
    
    // *response* updates
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { response.clearEvents(); });
  }
  
  frameRemains =  + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
  if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    response.status = PsychoJS.Status.FINISHED;
      }
    
  if (response.status === PsychoJS.Status.STARTED) {
    let theseKeys = response.getKeys({keyList: ['up', 'down'], waitRelease: false});
    _response_allKeys = _response_allKeys.concat(theseKeys);
    if (_response_allKeys.length > 0) {
      response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
      response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
      response.duration = _response_allKeys[_response_allKeys.length - 1].duration;
      // was this correct?
      if (response.keys == correct_answer) {
          response.corr = 1;
      } else {
          response.corr = 0;
      }
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  response_periodComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }
  });
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function response_periodRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'response_period' ---
  response_periodComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  });
  psychoJS.experiment.addData('response_period.stopped', globalClock.getTime());
  // was no response the correct answer?!
  if (response.keys === undefined) {
    if (['None','none',undefined].includes(correct_answer)) {
       response.corr = 1;  // correct non-response
    } else {
       response.corr = 0;  // failed to respond (incorrectly)
    }
  }
  // store data for current loop
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(response.corr, level);
  }
  psychoJS.experiment.addData('response.keys', response.keys);
  psychoJS.experiment.addData('response.corr', response.corr);
  if (typeof response.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('response.rt', response.rt);
      psychoJS.experiment.addData('response.duration', response.duration);
      }
  
  response.stop();
  // the Routine "response_period" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function end_experimentRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'end_experiment' ---
  t = 0;
  end_experimentClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  end_experimentMaxDurationReached = false;
  // update component parameters for each repeat
  end_button.keys = undefined;
  end_button.rt = undefined;
  _end_button_allKeys = [];
  psychoJS.experiment.addData('end_experiment.started', globalClock.getTime());
  end_experimentMaxDuration = null
  // keep track of which components have finished
  end_experimentComponents = [];
  end_experimentComponents.push(end_text);
  end_experimentComponents.push(end_button);
  
  end_experimentComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  return Scheduler.Event.NEXT;
}
}

function end_experimentRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'end_experiment' ---
  // get current time
  t = end_experimentClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *end_text* updates
  if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    end_text.tStart = t;  // (not accounting for frame time here)
    end_text.frameNStart = frameN;  // exact frame index
    
    end_text.setAutoDraw(true);
  }
  
  
  // *end_button* updates
  if (t >= 0.0 && end_button.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    end_button.tStart = t;  // (not accounting for frame time here)
    end_button.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { end_button.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { end_button.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { end_button.clearEvents(); });
  }
  
  if (end_button.status === PsychoJS.Status.STARTED) {
    let theseKeys = end_button.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
    _end_button_allKeys = _end_button_allKeys.concat(theseKeys);
    if (_end_button_allKeys.length > 0) {
      end_button.keys = _end_button_allKeys[_end_button_allKeys.length - 1].name;  // just the last key pressed
      end_button.rt = _end_button_allKeys[_end_button_allKeys.length - 1].rt;
      end_button.duration = _end_button_allKeys[_end_button_allKeys.length - 1].duration;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  end_experimentComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }
  });
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function end_experimentRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'end_experiment' ---
  end_experimentComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  });
  psychoJS.experiment.addData('end_experiment.stopped', globalClock.getTime());
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(end_button.corr, level);
  }
  psychoJS.experiment.addData('end_button.keys', end_button.keys);
  if (typeof end_button.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('end_button.rt', end_button.rt);
      psychoJS.experiment.addData('end_button.duration', end_button.duration);
      routineTimer.reset();
      }
  
  end_button.stop();
  // the Routine "end_experiment" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
// Check for and save orphaned data
if (psychoJS.experiment.isEntryEmpty()) {
  psychoJS.experiment.nextEntry();
}
psychoJS.window.close();
psychoJS.quit({message: message, isCompleted: isCompleted});

return Scheduler.Event.QUIT;
}