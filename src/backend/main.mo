import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type PilatesClass = {
    name : Text;
    description : Text;
    duration_minutes : Nat;
  };

  module PilatesClass {
    public func compare(c1 : PilatesClass, c2 : PilatesClass) : Order.Order {
      Text.compare(c1.name, c2.name);
    };
  };

  type StudioInfo = {
    name : Text;
    tagline : Text;
    contact_email : Text;
    classes : [PilatesClass];
  };

  let initialClasses = [
    {
      name = "Beginner Pilates";
      description = "An introduction to Pilates for all levels";
      duration_minutes = 60;
    },
    {
      name = "Contemporary Pilates";
      description = "A modern take on classic reformer Pilates";
      duration_minutes = 50;
    },
  ];

  let studio : StudioInfo = {
    name = "Pulse Pilates";
    tagline = "Move with confidence";
    contact_email = "info@pulsepilates.com";
    classes = initialClasses;
  };

  public query ({ caller }) func getStudioInfo() : async StudioInfo {
    {
      studio with
      classes = studio.classes.sort();
    };
  };

  public query ({ caller }) func getAllClasses() : async [PilatesClass] {
    studio.classes.sort();
  };

  public query ({ caller }) func getClassByName(name : Text) : async PilatesClass {
    let found = studio.classes.find(func(c) { c.name == name });
    switch (found) {
      case (null) { Runtime.trap("Class not found") };
      case (?pilatesClass) { pilatesClass };
    };
  };
};
