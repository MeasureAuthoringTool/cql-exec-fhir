// This file exists so that these FHIR modelinfos can also be used in a browser where Node's 'fs' module isn't
// available.

module.exports = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns4:modelInfo name="FHIR" version="4.0.1" url="http://hl7.org/fhir" targetQualifier="fhir" patientClassName="FHIR.Patient" patientBirthDatePropertyName="birthDate.value" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ns4="urn:hl7-org:elm-modelinfo:r1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <ns4:requiredModelInfo name="System" version="1.0.0"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Account" identifier="http://hl7.org/fhir/StructureDefinition/Account" label="Account" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.AccountStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="servicePeriod" elementType="FHIR.Period"/>
        <ns4:element name="coverage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Account.Coverage"/>
        </ns4:element>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="guarantor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Account.Guarantor"/>
        </ns4:element>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Account.Coverage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="priority" elementType="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Account.Guarantor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="party" elementType="FHIR.Reference"/>
        <ns4:element name="onHold" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AccountStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionCardinalityBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionConditionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionGroupingBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionParticipantType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionPrecheckBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionRequiredBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActionSelectionBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActivityDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ActivityDefinition" label="ActivityDefinition" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="kind" elementType="FHIR.ActivityDefinitionKind"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ActivityDefinition.Participant"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specimenRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="observationRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="observationResultRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="transform" elementType="FHIR.canonical"/>
        <ns4:element name="dynamicValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ActivityDefinition.DynamicValue"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActivityDefinition.DynamicValue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActivityDefinition.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ActivityParticipantType"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActivityDefinitionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ActivityParticipantType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Address" identifier="http://hl7.org/fhir/StructureDefinition/Address" label="Address" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" elementType="FHIR.AddressUse"/>
        <ns4:element name="type" elementType="FHIR.AddressType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="line">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="city" elementType="FHIR.string"/>
        <ns4:element name="district" elementType="FHIR.string"/>
        <ns4:element name="state" elementType="FHIR.string"/>
        <ns4:element name="postalCode" elementType="FHIR.string"/>
        <ns4:element name="country" elementType="FHIR.string"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AddressType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AddressUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AdministrativeGender" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AdverseEvent" identifier="http://hl7.org/fhir/StructureDefinition/AdverseEvent" label="AdverseEvent" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="actuality" elementType="FHIR.AdverseEventActuality"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="event" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="detected" elementType="FHIR.dateTime"/>
        <ns4:element name="recordedDate" elementType="FHIR.dateTime"/>
        <ns4:element name="resultingCondition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="seriousness" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="severity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="contributor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="suspectEntity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AdverseEvent.SuspectEntity"/>
        </ns4:element>
        <ns4:element name="subjectMedicalHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="referenceDocument">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="study">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="recorder"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="recorder"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AdverseEvent.SuspectEntity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="instance" elementType="FHIR.Reference"/>
        <ns4:element name="causality">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AdverseEvent.SuspectEntity.Causality"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AdverseEvent.SuspectEntity.Causality" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="assessment" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productRelatedness" elementType="FHIR.string"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AdverseEventActuality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Age" identifier="http://hl7.org/fhir/StructureDefinition/Age" label="Age" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AggregationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AllergyIntolerance" identifier="http://hl7.org/fhir/StructureDefinition/AllergyIntolerance" label="AllergyIntolerance" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="clinicalStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="verificationStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.AllergyIntoleranceType"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AllergyIntoleranceCategory"/>
        </ns4:element>
        <ns4:element name="criticality" elementType="FHIR.AllergyIntoleranceCriticality"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="onset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recordedDate" elementType="FHIR.dateTime"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="asserter" elementType="FHIR.Reference"/>
        <ns4:element name="lastOccurrence" elementType="FHIR.dateTime"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AllergyIntolerance.Reaction"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="recorder"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="asserter"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="recorder"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="asserter"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="asserter"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AllergyIntolerance.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="manifestation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="onset" elementType="FHIR.dateTime"/>
        <ns4:element name="severity" elementType="FHIR.AllergyIntoleranceSeverity"/>
        <ns4:element name="exposureRoute" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AllergyIntoleranceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AllergyIntoleranceCriticality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AllergyIntoleranceSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AllergyIntoleranceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Annotation" identifier="http://hl7.org/fhir/StructureDefinition/Annotation" label="Annotation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="time" elementType="FHIR.dateTime"/>
        <ns4:element name="text" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Appointment" identifier="http://hl7.org/fhir/StructureDefinition/Appointment" label="Appointment" retrievable="true" primaryCodePath="serviceType" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.AppointmentStatus"/>
        <ns4:element name="cancelationReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="serviceCategory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.unsignedInt"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="start" elementType="FHIR.instant"/>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="minutesDuration" elementType="FHIR.positiveInt"/>
        <ns4:element name="slot">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="patientInstruction" elementType="FHIR.string"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Appointment.Participant"/>
        </ns4:element>
        <ns4:element name="requestedPeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Appointment.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
        <ns4:element name="required" elementType="FHIR.ParticipantRequired"/>
        <ns4:element name="status" elementType="FHIR.ParticipationStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AppointmentResponse" identifier="http://hl7.org/fhir/StructureDefinition/AppointmentResponse" label="AppointmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="appointment" elementType="FHIR.Reference"/>
        <ns4:element name="start" elementType="FHIR.instant"/>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="participantType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
        <ns4:element name="participantStatus" elementType="FHIR.ParticipantStatus"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AppointmentStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AssertionDirectionType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AssertionOperatorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AssertionResponseTypes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Attachment" identifier="http://hl7.org/fhir/StructureDefinition/Attachment" label="Attachment" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="contentType" elementType="FHIR.MimeType"/>
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="data" elementType="FHIR.base64Binary"/>
        <ns4:element name="url" elementType="FHIR.url"/>
        <ns4:element name="size" elementType="FHIR.unsignedInt"/>
        <ns4:element name="hash" elementType="FHIR.base64Binary"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="creation" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEvent" identifier="http://hl7.org/fhir/StructureDefinition/AuditEvent" label="AuditEvent" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="subtype">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="action" elementType="FHIR.AuditEventAction"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="recorded" elementType="FHIR.instant"/>
        <ns4:element name="outcome" elementType="FHIR.AuditEventOutcome"/>
        <ns4:element name="outcomeDesc" elementType="FHIR.string"/>
        <ns4:element name="purposeOfEvent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="agent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Agent"/>
        </ns4:element>
        <ns4:element name="source" elementType="FHIR.AuditEvent.Source"/>
        <ns4:element name="entity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Entity"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="who"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="who"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEvent.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="role">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="altId" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="requestor" elementType="FHIR.boolean"/>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="policy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="media" elementType="FHIR.Coding"/>
        <ns4:element name="network" elementType="FHIR.AuditEvent.Agent.Network"/>
        <ns4:element name="purposeOfUse">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEvent.Agent.Network" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="address" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.AuditEventAgentNetworkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEvent.Entity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="what" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="role" elementType="FHIR.Coding"/>
        <ns4:element name="lifecycle" elementType="FHIR.Coding"/>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="query" elementType="FHIR.base64Binary"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Entity.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEvent.Entity.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEvent.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="site" elementType="FHIR.string"/>
        <ns4:element name="observer" elementType="FHIR.Reference"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEventAction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEventAgentNetworkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="AuditEventOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BackboneElement" identifier="http://hl7.org/fhir/StructureDefinition/BackboneElement" label="BackboneElement" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="modifierExtension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Basic" identifier="http://hl7.org/fhir/StructureDefinition/Basic" label="Basic" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.date"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Binary" identifier="http://hl7.org/fhir/StructureDefinition/Binary" label="Binary" retrievable="true" baseType="FHIR.Resource">
        <ns4:element name="contentType" elementType="FHIR.MimeType"/>
        <ns4:element name="securityContext" elementType="FHIR.Reference"/>
        <ns4:element name="data" elementType="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BindingStrength" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProduct" identifier="http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct" label="BiologicallyDerivedProduct" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="productCategory" elementType="FHIR.BiologicallyDerivedProductCategory"/>
        <ns4:element name="productCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.BiologicallyDerivedProductStatus"/>
        <ns4:element name="request">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.integer"/>
        <ns4:element name="parent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="collection" elementType="FHIR.BiologicallyDerivedProduct.Collection"/>
        <ns4:element name="processing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.BiologicallyDerivedProduct.Processing"/>
        </ns4:element>
        <ns4:element name="manipulation" elementType="FHIR.BiologicallyDerivedProduct.Manipulation"/>
        <ns4:element name="storage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.BiologicallyDerivedProduct.Storage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProduct.Collection" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="collector" elementType="FHIR.Reference"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="collected">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProduct.Manipulation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="time">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProduct.Processing" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="procedure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additive" elementType="FHIR.Reference"/>
        <ns4:element name="time">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProduct.Storage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="temperature" elementType="FHIR.decimal"/>
        <ns4:element name="scale" elementType="FHIR.BiologicallyDerivedProductStorageScale"/>
        <ns4:element name="duration" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProductCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProductStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BiologicallyDerivedProductStorageScale" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BodyStructure" identifier="http://hl7.org/fhir/StructureDefinition/BodyStructure" label="BodyStructure" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="morphology" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="locationQualifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="image">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Bundle" identifier="http://hl7.org/fhir/StructureDefinition/Bundle" label="Bundle" retrievable="true" baseType="FHIR.Resource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.BundleType"/>
        <ns4:element name="timestamp" elementType="FHIR.instant"/>
        <ns4:element name="total" elementType="FHIR.unsignedInt"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Link"/>
        </ns4:element>
        <ns4:element name="entry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Entry"/>
        </ns4:element>
        <ns4:element name="signature" elementType="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Bundle.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Bundle.Link"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="fullUrl" elementType="FHIR.uri"/>
        <ns4:element name="resource" elementType="FHIR.Resource"/>
        <ns4:element name="search" elementType="FHIR.Bundle.Entry.Search"/>
        <ns4:element name="request" elementType="FHIR.Bundle.Entry.Request"/>
        <ns4:element name="response" elementType="FHIR.Bundle.Entry.Response"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Bundle.Entry.Request" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="method" elementType="FHIR.HTTPVerb"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="ifNoneMatch" elementType="FHIR.string"/>
        <ns4:element name="ifModifiedSince" elementType="FHIR.instant"/>
        <ns4:element name="ifMatch" elementType="FHIR.string"/>
        <ns4:element name="ifNoneExist" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Bundle.Entry.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" elementType="FHIR.string"/>
        <ns4:element name="location" elementType="FHIR.uri"/>
        <ns4:element name="etag" elementType="FHIR.string"/>
        <ns4:element name="lastModified" elementType="FHIR.instant"/>
        <ns4:element name="outcome" elementType="FHIR.Resource"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Bundle.Entry.Search" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.SearchEntryMode"/>
        <ns4:element name="score" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Bundle.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relation" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="BundleType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement" identifier="http://hl7.org/fhir/StructureDefinition/CapabilityStatement" label="CapabilityStatement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="kind" elementType="FHIR.CapabilityStatementKind"/>
        <ns4:element name="instantiates">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="imports">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="software" elementType="FHIR.CapabilityStatement.Software"/>
        <ns4:element name="implementation" elementType="FHIR.CapabilityStatement.Implementation"/>
        <ns4:element name="fhirVersion" elementType="FHIR.FHIRVersion"/>
        <ns4:element name="format">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MimeType"/>
        </ns4:element>
        <ns4:element name="patchFormat">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MimeType"/>
        </ns4:element>
        <ns4:element name="implementationGuide">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="rest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest"/>
        </ns4:element>
        <ns4:element name="messaging">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Messaging"/>
        </ns4:element>
        <ns4:element name="document">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Document"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Document" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.DocumentMode"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Implementation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.url"/>
        <ns4:element name="custodian" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Messaging" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Messaging.Endpoint"/>
        </ns4:element>
        <ns4:element name="reliableCache" elementType="FHIR.unsignedInt"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="supportedMessage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Messaging.SupportedMessage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Messaging.Endpoint" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="protocol" elementType="FHIR.Coding"/>
        <ns4:element name="address" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Messaging.SupportedMessage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.EventCapabilityMode"/>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Rest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.RestfulCapabilityMode"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="security" elementType="FHIR.CapabilityStatement.Rest.Security"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest.Resource"/>
        </ns4:element>
        <ns4:element name="interaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest.Interaction"/>
        </ns4:element>
        <ns4:element name="searchParam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CapabilityStatement.Rest.Resource.SearchParam"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="operation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CapabilityStatement.Rest.Resource.Operation"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="compartment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Rest.Interaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.SystemRestfulInteraction"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Rest.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ResourceType"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="supportedProfile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="interaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest.Resource.Interaction"/>
        </ns4:element>
        <ns4:element name="versioning" elementType="FHIR.ResourceVersionPolicy"/>
        <ns4:element name="readHistory" elementType="FHIR.boolean"/>
        <ns4:element name="updateCreate" elementType="FHIR.boolean"/>
        <ns4:element name="conditionalCreate" elementType="FHIR.boolean"/>
        <ns4:element name="conditionalRead" elementType="FHIR.ConditionalReadStatus"/>
        <ns4:element name="conditionalUpdate" elementType="FHIR.boolean"/>
        <ns4:element name="conditionalDelete" elementType="FHIR.ConditionalDeleteStatus"/>
        <ns4:element name="referencePolicy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ReferenceHandlingPolicy"/>
        </ns4:element>
        <ns4:element name="searchInclude">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="searchRevInclude">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="searchParam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest.Resource.SearchParam"/>
        </ns4:element>
        <ns4:element name="operation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest.Resource.Operation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Rest.Resource.Interaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.TypeRestfulInteraction"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Rest.Resource.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Rest.Resource.SearchParam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
        <ns4:element name="type" elementType="FHIR.SearchParamType"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Rest.Security" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="cors" elementType="FHIR.boolean"/>
        <ns4:element name="service">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatement.Software" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="releaseDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CapabilityStatementKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CarePlan" identifier="http://hl7.org/fhir/StructureDefinition/CarePlan" label="CarePlan" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CarePlanStatus"/>
        <ns4:element name="intent" elementType="FHIR.CarePlanIntent"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="contributor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="careTeam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="addresses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="activity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CarePlan.Activity"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="performer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CarePlan.Activity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outcomeCodeableConcept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcomeReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="progress">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="detail" elementType="FHIR.CarePlan.Activity.Detail"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CarePlan.Activity.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" elementType="FHIR.CarePlanActivityKind"/>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CarePlanActivityStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="scheduled">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dailyAmount" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CarePlanActivityKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CarePlanActivityStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CarePlanIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CarePlanStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CareTeam" identifier="http://hl7.org/fhir/StructureDefinition/CareTeam" label="CareTeam" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CareTeamStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CareTeam.Participant"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="managingOrganization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="member"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="member"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="member"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CareTeam.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="member" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CareTeamStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CatalogEntry" identifier="http://hl7.org/fhir/StructureDefinition/CatalogEntry" label="CatalogEntry" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="orderable" elementType="FHIR.boolean"/>
        <ns4:element name="referencedItem" elementType="FHIR.Reference"/>
        <ns4:element name="additionalIdentifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="classification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="validTo" elementType="FHIR.dateTime"/>
        <ns4:element name="lastUpdated" elementType="FHIR.dateTime"/>
        <ns4:element name="additionalCharacteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="additionalClassification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="relatedEntry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CatalogEntry.RelatedEntry"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CatalogEntry.RelatedEntry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relationtype" elementType="FHIR.CatalogEntryRelationType"/>
        <ns4:element name="item" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CatalogEntryRelationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItem" identifier="http://hl7.org/fhir/StructureDefinition/ChargeItem" label="ChargeItem" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definitionUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="definitionCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ChargeItemStatus"/>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItem.Performer"/>
        </ns4:element>
        <ns4:element name="performingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="requestingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="costCenter" elementType="FHIR.Reference"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="bodysite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="factorOverride" elementType="FHIR.decimal"/>
        <ns4:element name="priceOverride" elementType="FHIR.Money"/>
        <ns4:element name="overrideReason" elementType="FHIR.string"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="enteredDate" elementType="FHIR.dateTime"/>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="service">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="account">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="context"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="enterer"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="enterer"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItem.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItemDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition" label="ChargeItemDefinition" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="derivedFromUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="applicability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItemDefinition.Applicability"/>
        </ns4:element>
        <ns4:element name="propertyGroup">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItemDefinition.PropertyGroup"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItemDefinition.Applicability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="language" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItemDefinition.PropertyGroup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="applicability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ChargeItemDefinition.Applicability"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="priceComponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItemDefinition.PropertyGroup.PriceComponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItemDefinition.PropertyGroup.PriceComponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ChargeItemDefinitionPriceComponentType"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItemDefinitionPriceComponentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ChargeItemStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim" identifier="http://hl7.org/fhir/StructureDefinition/Claim" label="Claim" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ClaimStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="use" elementType="FHIR.Use"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="billablePeriod" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Related"/>
        </ns4:element>
        <ns4:element name="prescription" elementType="FHIR.Reference"/>
        <ns4:element name="originalPrescription" elementType="FHIR.Reference"/>
        <ns4:element name="payee" elementType="FHIR.Claim.Payee"/>
        <ns4:element name="referral" elementType="FHIR.Reference"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="careTeam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.CareTeam"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.SupportingInfo"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Diagnosis"/>
        </ns4:element>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Procedure"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Insurance"/>
        </ns4:element>
        <ns4:element name="accident" elementType="FHIR.Claim.Accident"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Item"/>
        </ns4:element>
        <ns4:element name="total" elementType="FHIR.Money"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="provider"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="party"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="provider"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="party"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="party"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Accident" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.CareTeam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="responsible" elementType="FHIR.boolean"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="qualification" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="onAdmission" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="packageCode" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="businessArrangement" elementType="FHIR.string"/>
        <ns4:element name="preAuthRef">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="claimResponse" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="careTeamSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="diagnosisSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="procedureSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="informationSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="encounter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Item.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Item.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Item.Detail.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Item.Detail.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Payee" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="claim" elementType="FHIR.Reference"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Claim.SupportingInfo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse" identifier="http://hl7.org/fhir/StructureDefinition/ClaimResponse" label="ClaimResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ClaimResponseStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="use" elementType="FHIR.Use"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="requestor" elementType="FHIR.Reference"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="preAuthRef" elementType="FHIR.string"/>
        <ns4:element name="preAuthPeriod" elementType="FHIR.Period"/>
        <ns4:element name="payeeType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Item"/>
        </ns4:element>
        <ns4:element name="addItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.AddItem"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ClaimResponse.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="total">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Total"/>
        </ns4:element>
        <ns4:element name="payment" elementType="FHIR.ClaimResponse.Payment"/>
        <ns4:element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="formCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="form" elementType="FHIR.Attachment"/>
        <ns4:element name="processNote">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.ProcessNote"/>
        </ns4:element>
        <ns4:element name="communicationRequest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Insurance"/>
        </ns4:element>
        <ns4:element name="error">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Error"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requestor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.AddItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="detailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="subdetailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="provider">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ClaimResponse.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.AddItem.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.AddItem.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ClaimResponse.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.AddItem.Detail.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.AddItem.Detail.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ClaimResponse.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Error" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="detailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="subDetailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="businessArrangement" elementType="FHIR.string"/>
        <ns4:element name="claimResponse" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Item.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Item.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Item.Adjudication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Item.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="detailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ClaimResponse.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Item.Detail.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Item.Detail.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="subDetailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ClaimResponse.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Payment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="adjustment" elementType="FHIR.Money"/>
        <ns4:element name="adjustmentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" elementType="FHIR.positiveInt"/>
        <ns4:element name="type" elementType="FHIR.NoteType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponse.Total" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClaimStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClinicalImpression" identifier="http://hl7.org/fhir/StructureDefinition/ClinicalImpression" label="ClinicalImpression" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ClinicalImpressionStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="assessor" elementType="FHIR.Reference"/>
        <ns4:element name="previous" elementType="FHIR.Reference"/>
        <ns4:element name="problem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="investigation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClinicalImpression.Investigation"/>
        </ns4:element>
        <ns4:element name="protocol">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="summary" elementType="FHIR.string"/>
        <ns4:element name="finding">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClinicalImpression.Finding"/>
        </ns4:element>
        <ns4:element name="prognosisCodeableConcept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="prognosisReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="assessor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClinicalImpression.Finding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemCodeableConcept" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="itemReference" elementType="FHIR.Reference"/>
        <ns4:element name="basis" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClinicalImpression.Investigation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ClinicalImpressionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSearchSupport" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystem" identifier="http://hl7.org/fhir/StructureDefinition/CodeSystem" label="CodeSystem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="caseSensitive" elementType="FHIR.boolean"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
        <ns4:element name="hierarchyMeaning" elementType="FHIR.CodeSystemHierarchyMeaning"/>
        <ns4:element name="compositional" elementType="FHIR.boolean"/>
        <ns4:element name="versionNeeded" elementType="FHIR.boolean"/>
        <ns4:element name="content" elementType="FHIR.CodeSystemContentMode"/>
        <ns4:element name="supplements" elementType="FHIR.canonical"/>
        <ns4:element name="count" elementType="FHIR.unsignedInt"/>
        <ns4:element name="filter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Filter"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Property"/>
        </ns4:element>
        <ns4:element name="concept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Concept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystem.Concept" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Concept.Designation"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Concept.Property"/>
        </ns4:element>
        <ns4:element name="concept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeSystem.Concept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystem.Concept.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.Coding"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystem.Concept.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystem.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="operator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FilterOperator"/>
        </ns4:element>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystem.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.PropertyType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystemContentMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeSystemHierarchyMeaning" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CodeableConcept" identifier="http://hl7.org/fhir/StructureDefinition/CodeableConcept" label="CodeableConcept" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="coding">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Coding" identifier="http://hl7.org/fhir/StructureDefinition/Coding" label="Coding" retrievable="false" primaryCodePath="code" baseType="FHIR.Element">
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="userSelected" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Communication" identifier="http://hl7.org/fhir/StructureDefinition/Communication" label="Communication" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="inResponseTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CommunicationStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.CommunicationPriority"/>
        <ns4:element name="medium">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="topic" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="about">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="sent" elementType="FHIR.dateTime"/>
        <ns4:element name="received" elementType="FHIR.dateTime"/>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="sender" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="payload">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Communication.Payload"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Communication.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CommunicationPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CommunicationRequest" identifier="http://hl7.org/fhir/StructureDefinition/CommunicationRequest" label="CommunicationRequest" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.CommunicationRequestStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.CommunicationPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="medium">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="about">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="payload">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CommunicationRequest.Payload"/>
        </ns4:element>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="sender" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="sender"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="requester"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CommunicationRequest.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CommunicationRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CommunicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CompartmentCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CompartmentDefinition" identifier="http://hl7.org/fhir/StructureDefinition/CompartmentDefinition" label="CompartmentDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="code" elementType="FHIR.CompartmentType"/>
        <ns4:element name="search" elementType="FHIR.boolean"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CompartmentDefinition.Resource"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CompartmentDefinition.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.ResourceType"/>
        <ns4:element name="param">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CompartmentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Composition" identifier="http://hl7.org/fhir/StructureDefinition/Composition" label="Composition" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.CompositionStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="confidentiality" elementType="FHIR.DocumentConfidentiality"/>
        <ns4:element name="attester">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Attester"/>
        </ns4:element>
        <ns4:element name="custodian" elementType="FHIR.Reference"/>
        <ns4:element name="relatesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.RelatesTo"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Event"/>
        </ns4:element>
        <ns4:element name="section">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Section"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="party"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="party"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Composition.Attester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.CompositionAttestationMode"/>
        <ns4:element name="time" elementType="FHIR.dateTime"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Composition.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Composition.RelatesTo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.DocumentRelationshipType"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Composition.Section" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="focus" elementType="FHIR.Reference"/>
        <ns4:element name="text" elementType="FHIR.Narrative"/>
        <ns4:element name="mode" elementType="FHIR.SectionMode"/>
        <ns4:element name="orderedBy" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="entry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="emptyReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="section">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Composition.Section"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CompositionAttestationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CompositionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMap" identifier="http://hl7.org/fhir/StructureDefinition/ConceptMap" label="ConceptMap" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Group"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMap.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="source" elementType="FHIR.uri"/>
        <ns4:element name="sourceVersion" elementType="FHIR.string"/>
        <ns4:element name="target" elementType="FHIR.uri"/>
        <ns4:element name="targetVersion" elementType="FHIR.string"/>
        <ns4:element name="element">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Group.Element"/>
        </ns4:element>
        <ns4:element name="unmapped" elementType="FHIR.ConceptMap.Group.Unmapped"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMap.Group.Element" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Group.Element.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMap.Group.Element.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="equivalence" elementType="FHIR.ConceptMapEquivalence"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="dependsOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Group.Element.Target.DependsOn"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ConceptMap.Group.Element.Target.DependsOn"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMap.Group.Element.Target.DependsOn" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="property" elementType="FHIR.uri"/>
        <ns4:element name="system" elementType="FHIR.canonical"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="display" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMap.Group.Unmapped" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.ConceptMapGroupUnmappedMode"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMapEquivalence" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConceptMapGroupUnmappedMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Condition" identifier="http://hl7.org/fhir/StructureDefinition/Condition" label="Condition" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="clinicalStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="verificationStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="severity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="onset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="abatement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recordedDate" elementType="FHIR.dateTime"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="asserter" elementType="FHIR.Reference"/>
        <ns4:element name="stage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Condition.Stage"/>
        </ns4:element>
        <ns4:element name="evidence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Condition.Evidence"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="asserter"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="asserter"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="asserter"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Condition.Evidence" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Condition.Stage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="summary" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="assessment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConditionalDeleteStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConditionalReadStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Consent" identifier="http://hl7.org/fhir/StructureDefinition/Consent" label="Consent" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ConsentState"/>
        <ns4:element name="scope" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="dateTime" elementType="FHIR.dateTime"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="organization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="policy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Policy"/>
        </ns4:element>
        <ns4:element name="policyRule" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="verification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Verification"/>
        </ns4:element>
        <ns4:element name="provision" elementType="FHIR.Consent.Provision"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Consent.Policy" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="authority" elementType="FHIR.uri"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Consent.Provision" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ConsentProvisionType"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="actor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Provision.Actor"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="purpose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="class">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="dataPeriod" elementType="FHIR.Period"/>
        <ns4:element name="data">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Provision.Data"/>
        </ns4:element>
        <ns4:element name="provision">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Consent.Provision"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Consent.Provision.Actor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Consent.Provision.Data" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="meaning" elementType="FHIR.ConsentDataMeaning"/>
        <ns4:element name="reference" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Consent.Verification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="verified" elementType="FHIR.boolean"/>
        <ns4:element name="verifiedWith" elementType="FHIR.Reference"/>
        <ns4:element name="verificationDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConsentDataMeaning" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConsentProvisionType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConsentState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ConstraintSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ContactDetail" identifier="http://hl7.org/fhir/StructureDefinition/ContactDetail" label="ContactDetail" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ContactPoint" identifier="http://hl7.org/fhir/StructureDefinition/ContactPoint" label="ContactPoint" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="system" elementType="FHIR.ContactPointSystem"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="use" elementType="FHIR.ContactPointUse"/>
        <ns4:element name="rank" elementType="FHIR.positiveInt"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ContactPointSystem" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ContactPointUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract" identifier="http://hl7.org/fhir/StructureDefinition/Contract" label="Contract" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.ContractStatus"/>
        <ns4:element name="legalState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="instantiatesCanonical" elementType="FHIR.Reference"/>
        <ns4:element name="instantiatesUri" elementType="FHIR.uri"/>
        <ns4:element name="contentDerivative" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="issued" elementType="FHIR.dateTime"/>
        <ns4:element name="applies" elementType="FHIR.Period"/>
        <ns4:element name="expirationType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authority">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="domain">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="site">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="scope" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contentDefinition" elementType="FHIR.Contract.ContentDefinition"/>
        <ns4:element name="term">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="signer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Signer"/>
        </ns4:element>
        <ns4:element name="friendly">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Friendly"/>
        </ns4:element>
        <ns4:element name="legal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Legal"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Rule"/>
        </ns4:element>
        <ns4:element name="legallyBinding">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.ContentDefinition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="publisher" elementType="FHIR.Reference"/>
        <ns4:element name="publicationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="publicationStatus" elementType="FHIR.ContractPublicationStatus"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Friendly" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Legal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Signer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
        <ns4:element name="signature">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Signature"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="issued" elementType="FHIR.dateTime"/>
        <ns4:element name="applies" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.SecurityLabel"/>
        </ns4:element>
        <ns4:element name="offer" elementType="FHIR.Contract.Term.Offer"/>
        <ns4:element name="asset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.Asset"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.Action"/>
        </ns4:element>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contract.Term"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.Action.Subject"/>
        </ns4:element>
        <ns4:element name="intent" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="contextLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="requester">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="requesterLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="performerType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="performerRole" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="performerLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="reasonLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Action.Subject" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Asset" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="scope" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="typeReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="subtype">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="relationship" elementType="FHIR.Coding"/>
        <ns4:element name="context">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.Asset.Context"/>
        </ns4:element>
        <ns4:element name="condition" elementType="FHIR.string"/>
        <ns4:element name="periodType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
        <ns4:element name="usePeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contract.Term.Offer.Answer"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
        <ns4:element name="valuedItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.Asset.ValuedItem"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Asset.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Asset.ValuedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="effectiveTime" elementType="FHIR.dateTime"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="points" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="payment" elementType="FHIR.string"/>
        <ns4:element name="paymentDate" elementType="FHIR.dateTime"/>
        <ns4:element name="responsible" elementType="FHIR.Reference"/>
        <ns4:element name="recipient" elementType="FHIR.Reference"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Offer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="party">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.Offer.Party"/>
        </ns4:element>
        <ns4:element name="topic" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="decision" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="decisionMode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term.Offer.Answer"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Offer.Answer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.Offer.Party" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contract.Term.SecurityLabel" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
        <ns4:element name="classification" elementType="FHIR.Coding"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="control">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ContractPublicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ContractStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Contributor" identifier="http://hl7.org/fhir/StructureDefinition/Contributor" label="Contributor" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.ContributorType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ContributorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Count" identifier="http://hl7.org/fhir/StructureDefinition/Count" label="Count" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Coverage" identifier="http://hl7.org/fhir/StructureDefinition/Coverage" label="Coverage" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CoverageStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="policyHolder" elementType="FHIR.Reference"/>
        <ns4:element name="subscriber" elementType="FHIR.Reference"/>
        <ns4:element name="subscriberId" elementType="FHIR.string"/>
        <ns4:element name="beneficiary" elementType="FHIR.Reference"/>
        <ns4:element name="dependent" elementType="FHIR.string"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="payor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="class">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coverage.Class"/>
        </ns4:element>
        <ns4:element name="order" elementType="FHIR.positiveInt"/>
        <ns4:element name="network" elementType="FHIR.string"/>
        <ns4:element name="costToBeneficiary">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coverage.CostToBeneficiary"/>
        </ns4:element>
        <ns4:element name="subrogation" elementType="FHIR.boolean"/>
        <ns4:element name="contract">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="policyHolder"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subscriber"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="beneficiary"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="payor"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="policyHolder"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="subscriber"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="payor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Coverage.Class" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Coverage.CostToBeneficiary" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="exception">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coverage.CostToBeneficiary.Exception"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Coverage.CostToBeneficiary.Exception" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityRequest" identifier="http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest" label="CoverageEligibilityRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EligibilityRequestStatus"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="purpose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityRequestPurpose"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.SupportingInfo"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.Insurance"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.Item"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="provider"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityRequest.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="businessArrangement" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityRequest.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="supportingInfoSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.Item.Diagnosis"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityRequest.Item.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityRequest.SupportingInfo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="information" elementType="FHIR.Reference"/>
        <ns4:element name="appliesToAll" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityResponse" identifier="http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse" label="CoverageEligibilityResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EligibilityResponseStatus"/>
        <ns4:element name="purpose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityResponsePurpose"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="requestor" elementType="FHIR.Reference"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Insurance"/>
        </ns4:element>
        <ns4:element name="preAuthRef" elementType="FHIR.string"/>
        <ns4:element name="form" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="error">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Error"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requestor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityResponse.Error" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityResponse.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="inforce" elementType="FHIR.boolean"/>
        <ns4:element name="benefitPeriod" elementType="FHIR.Period"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Insurance.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityResponse.Insurance.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="excluded" elementType="FHIR.boolean"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="network" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="term" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="benefit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Insurance.Item.Benefit"/>
        </ns4:element>
        <ns4:element name="authorizationRequired" elementType="FHIR.boolean"/>
        <ns4:element name="authorizationSupporting">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="authorizationUrl" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageEligibilityResponse.Insurance.Item.Benefit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allowed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="used">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CoverageStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="CurrencyCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DataRequirement" identifier="http://hl7.org/fhir/StructureDefinition/DataRequirement" label="DataRequirement" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.FHIRAllTypes"/>
        <ns4:element name="profile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="mustSupport">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="codeFilter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.CodeFilter"/>
        </ns4:element>
        <ns4:element name="dateFilter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.DateFilter"/>
        </ns4:element>
        <ns4:element name="limit" elementType="FHIR.positiveInt"/>
        <ns4:element name="sort">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.Sort"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DataRequirement.CodeFilter" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="searchParam" elementType="FHIR.string"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DataRequirement.DateFilter" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="searchParam" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DataRequirement.Sort" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="direction" elementType="FHIR.SortDirection"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DayOfWeek" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DaysOfWeek" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DetectedIssue" identifier="http://hl7.org/fhir/StructureDefinition/DetectedIssue" label="DetectedIssue" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DetectedIssueStatus"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="severity" elementType="FHIR.DetectedIssueSeverity"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="identified">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="implicated">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="evidence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DetectedIssue.Evidence"/>
        </ns4:element>
        <ns4:element name="detail" elementType="FHIR.string"/>
        <ns4:element name="reference" elementType="FHIR.uri"/>
        <ns4:element name="mitigation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DetectedIssue.Mitigation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="author"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DetectedIssue.Evidence" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DetectedIssue.Mitigation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DetectedIssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DetectedIssueStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Device" identifier="http://hl7.org/fhir/StructureDefinition/Device" label="Device" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition" elementType="FHIR.Reference"/>
        <ns4:element name="udiCarrier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.UdiCarrier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FHIRDeviceStatus"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="distinctIdentifier" elementType="FHIR.string"/>
        <ns4:element name="manufacturer" elementType="FHIR.string"/>
        <ns4:element name="manufactureDate" elementType="FHIR.dateTime"/>
        <ns4:element name="expirationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="lotNumber" elementType="FHIR.string"/>
        <ns4:element name="serialNumber" elementType="FHIR.string"/>
        <ns4:element name="deviceName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.DeviceName"/>
        </ns4:element>
        <ns4:element name="modelNumber" elementType="FHIR.string"/>
        <ns4:element name="partNumber" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specialization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.Specialization"/>
        </ns4:element>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.Version"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.Property"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="safety">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="parent" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Device.DeviceName" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.DeviceNameType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Device.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="valueQuantity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Quantity"/>
        </ns4:element>
        <ns4:element name="valueCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Device.Specialization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="systemType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Device.UdiCarrier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="deviceIdentifier" elementType="FHIR.string"/>
        <ns4:element name="issuer" elementType="FHIR.uri"/>
        <ns4:element name="jurisdiction" elementType="FHIR.uri"/>
        <ns4:element name="carrierAIDC" elementType="FHIR.base64Binary"/>
        <ns4:element name="carrierHRF" elementType="FHIR.string"/>
        <ns4:element name="entryType" elementType="FHIR.UDIEntryType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Device.Version" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="component" elementType="FHIR.Identifier"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceDefinition" identifier="http://hl7.org/fhir/StructureDefinition/DeviceDefinition" label="DeviceDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="udiDeviceIdentifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.UdiDeviceIdentifier"/>
        </ns4:element>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="deviceName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.DeviceName"/>
        </ns4:element>
        <ns4:element name="modelNumber" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specialization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Specialization"/>
        </ns4:element>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="safety">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="shelfLifeStorage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ProductShelfLife"/>
        </ns4:element>
        <ns4:element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
        <ns4:element name="languageCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="capability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Capability"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Property"/>
        </ns4:element>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="onlineInformation" elementType="FHIR.uri"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="parentDevice" elementType="FHIR.Reference"/>
        <ns4:element name="material">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Material"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceDefinition.Capability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceDefinition.DeviceName" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.DeviceNameType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceDefinition.Material" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="alternate" elementType="FHIR.boolean"/>
        <ns4:element name="allergenicIndicator" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceDefinition.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="valueQuantity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Quantity"/>
        </ns4:element>
        <ns4:element name="valueCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceDefinition.Specialization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="systemType" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceDefinition.UdiDeviceIdentifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="deviceIdentifier" elementType="FHIR.string"/>
        <ns4:element name="issuer" elementType="FHIR.uri"/>
        <ns4:element name="jurisdiction" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceMetric" identifier="http://hl7.org/fhir/StructureDefinition/DeviceMetric" label="DeviceMetric" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="parent" elementType="FHIR.Reference"/>
        <ns4:element name="operationalStatus" elementType="FHIR.DeviceMetricOperationalStatus"/>
        <ns4:element name="color" elementType="FHIR.DeviceMetricColor"/>
        <ns4:element name="category" elementType="FHIR.DeviceMetricCategory"/>
        <ns4:element name="measurementPeriod" elementType="FHIR.Timing"/>
        <ns4:element name="calibration">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceMetric.Calibration"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceMetric.Calibration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.DeviceMetricCalibrationType"/>
        <ns4:element name="state" elementType="FHIR.DeviceMetricCalibrationState"/>
        <ns4:element name="time" elementType="FHIR.instant"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceMetricCalibrationState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceMetricCalibrationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceMetricCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceMetricColor" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceMetricOperationalStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceNameType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceRequest" identifier="http://hl7.org/fhir/StructureDefinition/DeviceRequest" label="DeviceRequest" retrievable="true" primaryCodePath="codeCodeableConcept" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="priorRequest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.DeviceRequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceRequest.Parameter"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performerType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="code as Reference)"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="performer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceRequest.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceUseStatement" identifier="http://hl7.org/fhir/StructureDefinition/DeviceUseStatement" label="DeviceUseStatement" retrievable="true" primaryCodePath="device.code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DeviceUseStatementStatus"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recordedOn" elementType="FHIR.dateTime"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="device"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DeviceUseStatementStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DiagnosticReport" identifier="http://hl7.org/fhir/StructureDefinition/DiagnosticReport" label="DiagnosticReport" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DiagnosticReportStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="issued" elementType="FHIR.instant"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="resultsInterpreter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="specimen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="result">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="imagingStudy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="media">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DiagnosticReport.Media"/>
        </ns4:element>
        <ns4:element name="conclusion" elementType="FHIR.string"/>
        <ns4:element name="conclusionCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="presentedForm">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DiagnosticReport.Media" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="link" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DiagnosticReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DiscriminatorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Distance" identifier="http://hl7.org/fhir/StructureDefinition/Distance" label="Distance" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentConfidentiality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentManifest" identifier="http://hl7.org/fhir/StructureDefinition/DocumentManifest" label="DocumentManifest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="masterIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DocumentReferenceStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="source" elementType="FHIR.uri"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentManifest.Related"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="ref"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentManifest.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="ref" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentReference" identifier="http://hl7.org/fhir/StructureDefinition/DocumentReference" label="DocumentReference" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="masterIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DocumentReferenceStatus"/>
        <ns4:element name="docStatus" elementType="FHIR.ReferredDocumentStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.instant"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authenticator" elementType="FHIR.Reference"/>
        <ns4:element name="custodian" elementType="FHIR.Reference"/>
        <ns4:element name="relatesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentReference.RelatesTo"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentReference.Content"/>
        </ns4:element>
        <ns4:element name="context" elementType="FHIR.DocumentReference.Context"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="authenticator"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentReference.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="attachment" elementType="FHIR.Attachment"/>
        <ns4:element name="format" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentReference.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="encounter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="facilityType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="practiceSetting" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sourcePatientInfo" elementType="FHIR.Reference"/>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentReference.RelatesTo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.DocumentRelationshipType"/>
        <ns4:element name="target" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentReferenceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DocumentRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="DomainResource" identifier="http://hl7.org/fhir/StructureDefinition/DomainResource" label="DomainResource" retrievable="true" baseType="FHIR.Resource">
        <ns4:element name="text" elementType="FHIR.Narrative"/>
        <ns4:element name="contained">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Resource"/>
        </ns4:element>
        <ns4:element name="extension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
        <ns4:element name="modifierExtension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Dosage" identifier="http://hl7.org/fhir/StructureDefinition/Dosage" label="Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.integer"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="additionalInstruction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="patientInstruction" elementType="FHIR.string"/>
        <ns4:element name="timing" elementType="FHIR.Timing"/>
        <ns4:element name="asNeeded">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="site" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="route" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doseAndRate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage.DoseAndRate"/>
        </ns4:element>
        <ns4:element name="maxDosePerPeriod" elementType="FHIR.Ratio"/>
        <ns4:element name="maxDosePerAdministration" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="maxDosePerLifetime" elementType="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Dosage.DoseAndRate" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="rate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Duration" identifier="http://hl7.org/fhir/StructureDefinition/Duration" label="Duration" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EffectEvidenceSynthesis" identifier="http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis" label="EffectEvidenceSynthesis" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="synthesisType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="studyType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population" elementType="FHIR.Reference"/>
        <ns4:element name="exposure" elementType="FHIR.Reference"/>
        <ns4:element name="exposureAlternative" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.Reference"/>
        <ns4:element name="sampleSize" elementType="FHIR.EffectEvidenceSynthesis.SampleSize"/>
        <ns4:element name="resultsByExposure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.ResultsByExposure"/>
        </ns4:element>
        <ns4:element name="effectEstimate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.EffectEstimate"/>
        </ns4:element>
        <ns4:element name="certainty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.Certainty"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EffectEvidenceSynthesis.Certainty" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="certaintySubcomponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.Certainty.CertaintySubcomponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EffectEvidenceSynthesis.Certainty.CertaintySubcomponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EffectEvidenceSynthesis.EffectEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="variantState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="precisionEstimate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="level" elementType="FHIR.decimal"/>
        <ns4:element name="from" elementType="FHIR.decimal"/>
        <ns4:element name="to" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EffectEvidenceSynthesis.ResultsByExposure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="exposureState" elementType="FHIR.ExposureState"/>
        <ns4:element name="variantState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="riskEvidenceSynthesis" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EffectEvidenceSynthesis.SampleSize" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="numberOfStudies" elementType="FHIR.integer"/>
        <ns4:element name="numberOfParticipants" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Element" identifier="http://hl7.org/fhir/StructureDefinition/Element" label="Element" retrievable="false" baseType="System.Any">
        <ns4:element name="id" elementType="System.String"/>
        <ns4:element name="extension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ElementDefinition" label="ElementDefinition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="representation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PropertyRepresentation"/>
        </ns4:element>
        <ns4:element name="sliceName" elementType="FHIR.string"/>
        <ns4:element name="sliceIsConstraining" elementType="FHIR.boolean"/>
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="slicing" elementType="FHIR.ElementDefinition.Slicing"/>
        <ns4:element name="short" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.markdown"/>
        <ns4:element name="comment" elementType="FHIR.markdown"/>
        <ns4:element name="requirements" elementType="FHIR.markdown"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="min" elementType="FHIR.unsignedInt"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="base" elementType="FHIR.ElementDefinition.Base"/>
        <ns4:element name="contentReference" elementType="FHIR.uri"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Type"/>
        </ns4:element>
        <ns4:element name="defaultValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="meaningWhenMissing" elementType="FHIR.markdown"/>
        <ns4:element name="orderMeaning" elementType="FHIR.string"/>
        <ns4:element name="fixed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="pattern">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="example">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Example"/>
        </ns4:element>
        <ns4:element name="minValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="maxValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="maxLength" elementType="FHIR.integer"/>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.id"/>
        </ns4:element>
        <ns4:element name="constraint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Constraint"/>
        </ns4:element>
        <ns4:element name="mustSupport" elementType="FHIR.boolean"/>
        <ns4:element name="isModifier" elementType="FHIR.boolean"/>
        <ns4:element name="isModifierReason" elementType="FHIR.string"/>
        <ns4:element name="isSummary" elementType="FHIR.boolean"/>
        <ns4:element name="binding" elementType="FHIR.ElementDefinition.Binding"/>
        <ns4:element name="mapping">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Mapping"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Base" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="min" elementType="FHIR.unsignedInt"/>
        <ns4:element name="max" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Binding" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="strength" elementType="FHIR.BindingStrength"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Constraint" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="key" elementType="FHIR.id"/>
        <ns4:element name="requirements" elementType="FHIR.string"/>
        <ns4:element name="severity" elementType="FHIR.ConstraintSeverity"/>
        <ns4:element name="human" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="xpath" elementType="FHIR.string"/>
        <ns4:element name="source" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Example" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Mapping" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="identity" elementType="FHIR.id"/>
        <ns4:element name="language" elementType="FHIR.MimeType"/>
        <ns4:element name="map" elementType="FHIR.string"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Slicing" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="discriminator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Slicing.Discriminator"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="ordered" elementType="FHIR.boolean"/>
        <ns4:element name="rules" elementType="FHIR.SlicingRules"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Slicing.Discriminator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.DiscriminatorType"/>
        <ns4:element name="path" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ElementDefinition.Type" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="code" elementType="FHIR.uri"/>
        <ns4:element name="targetProfile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="versioning" elementType="FHIR.ReferenceVersionRules"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EligibilityRequestPurpose" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EligibilityRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EligibilityResponsePurpose" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EligibilityResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EnableWhenBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Encounter" identifier="http://hl7.org/fhir/StructureDefinition/Encounter" label="Encounter" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EncounterStatus"/>
        <ns4:element name="statusHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.StatusHistory"/>
        </ns4:element>
        <ns4:element name="class" elementType="FHIR.Coding"/>
        <ns4:element name="classHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.ClassHistory"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="episodeOfCare">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Participant"/>
        </ns4:element>
        <ns4:element name="appointment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="length" elementType="FHIR.Duration"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Diagnosis"/>
        </ns4:element>
        <ns4:element name="account">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="hospitalization" elementType="FHIR.Encounter.Hospitalization"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Location"/>
        </ns4:element>
        <ns4:element name="serviceProvider" elementType="FHIR.Reference"/>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="where(resolve() is Practitioner)"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="individual"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="individual"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Encounter.ClassHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="class" elementType="FHIR.Coding"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Encounter.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="condition" elementType="FHIR.Reference"/>
        <ns4:element name="use" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rank" elementType="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Encounter.Hospitalization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="preAdmissionIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="origin" elementType="FHIR.Reference"/>
        <ns4:element name="admitSource" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reAdmission" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dietPreference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialCourtesy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialArrangement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="destination" elementType="FHIR.Reference"/>
        <ns4:element name="dischargeDisposition" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Encounter.Location" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="status" elementType="FHIR.EncounterLocationStatus"/>
        <ns4:element name="physicalType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Encounter.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="individual" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Encounter.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" elementType="FHIR.EncounterStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EncounterLocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EncounterStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Endpoint" identifier="http://hl7.org/fhir/StructureDefinition/Endpoint" label="Endpoint" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EndpointStatus"/>
        <ns4:element name="connectionType" elementType="FHIR.Coding"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="payloadType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="payloadMimeType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MimeType"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.url"/>
        <ns4:element name="header">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EndpointStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EnrollmentRequest" identifier="http://hl7.org/fhir/StructureDefinition/EnrollmentRequest" label="EnrollmentRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EnrollmentRequestStatus"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="candidate" elementType="FHIR.Reference"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="candidate"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EnrollmentRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EnrollmentResponse" identifier="http://hl7.org/fhir/StructureDefinition/EnrollmentResponse" label="EnrollmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EnrollmentResponseStatus"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="requestProvider" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EnrollmentResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EpisodeOfCare" identifier="http://hl7.org/fhir/StructureDefinition/EpisodeOfCare" label="EpisodeOfCare" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="statusHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EpisodeOfCare.StatusHistory"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EpisodeOfCare.Diagnosis"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="referralRequest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="careManager" elementType="FHIR.Reference"/>
        <ns4:element name="team">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="account">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="where(resolve() is Practitioner)"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EpisodeOfCare.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="condition" elementType="FHIR.Reference"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rank" elementType="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EpisodeOfCare.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" elementType="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EpisodeOfCareStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EventCapabilityMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EventDefinition" identifier="http://hl7.org/fhir/StructureDefinition/EventDefinition" label="EventDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="trigger">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TriggerDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EventTiming" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Evidence" identifier="http://hl7.org/fhir/StructureDefinition/Evidence" label="Evidence" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="exposureBackground" elementType="FHIR.Reference"/>
        <ns4:element name="exposureVariant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="outcome">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EvidenceVariable" identifier="http://hl7.org/fhir/StructureDefinition/EvidenceVariable" label="EvidenceVariable" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.EvidenceVariableType"/>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EvidenceVariable.Characteristic"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EvidenceVariable.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="usageContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="exclude" elementType="FHIR.boolean"/>
        <ns4:element name="participantEffective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="timeFromStart" elementType="FHIR.Duration"/>
        <ns4:element name="groupMeasure" elementType="FHIR.GroupMeasure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="EvidenceVariableType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario" identifier="http://hl7.org/fhir/StructureDefinition/ExampleScenario" label="ExampleScenario" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="actor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Actor"/>
        </ns4:element>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Instance"/>
        </ns4:element>
        <ns4:element name="process">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Process"/>
        </ns4:element>
        <ns4:element name="workflow">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Actor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actorId" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.ExampleScenarioActorType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="resourceId" elementType="FHIR.string"/>
        <ns4:element name="resourceType" elementType="FHIR.FHIRResourceType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Instance.Version"/>
        </ns4:element>
        <ns4:element name="containedInstance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Instance.ContainedInstance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Instance.ContainedInstance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="resourceId" elementType="FHIR.string"/>
        <ns4:element name="versionId" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Instance.Version" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="versionId" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Process" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="preConditions" elementType="FHIR.markdown"/>
        <ns4:element name="postConditions" elementType="FHIR.markdown"/>
        <ns4:element name="step">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Process.Step"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Process.Step" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="process">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExampleScenario.Process"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="pause" elementType="FHIR.boolean"/>
        <ns4:element name="operation" elementType="FHIR.ExampleScenario.Process.Step.Operation"/>
        <ns4:element name="alternative">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Process.Step.Alternative"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Process.Step.Alternative" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="step">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExampleScenario.Process.Step"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenario.Process.Step.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="initiator" elementType="FHIR.string"/>
        <ns4:element name="receiver" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="initiatorActive" elementType="FHIR.boolean"/>
        <ns4:element name="receiverActive" elementType="FHIR.boolean"/>
        <ns4:element name="request" elementType="FHIR.ExampleScenario.Instance.ContainedInstance"/>
        <ns4:element name="response" elementType="FHIR.ExampleScenario.Instance.ContainedInstance"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExampleScenarioActorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit" identifier="http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit" label="ExplanationOfBenefit" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ExplanationOfBenefitStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="use" elementType="FHIR.Use"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="billablePeriod" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fundsReserveRequested" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Related"/>
        </ns4:element>
        <ns4:element name="prescription" elementType="FHIR.Reference"/>
        <ns4:element name="originalPrescription" elementType="FHIR.Reference"/>
        <ns4:element name="payee" elementType="FHIR.ExplanationOfBenefit.Payee"/>
        <ns4:element name="referral" elementType="FHIR.Reference"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="claim" elementType="FHIR.Reference"/>
        <ns4:element name="claimResponse" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="preAuthRef">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="preAuthRefPeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
        <ns4:element name="careTeam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.CareTeam"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.SupportingInfo"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Diagnosis"/>
        </ns4:element>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Procedure"/>
        </ns4:element>
        <ns4:element name="precedence" elementType="FHIR.positiveInt"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Insurance"/>
        </ns4:element>
        <ns4:element name="accident" elementType="FHIR.ExplanationOfBenefit.Accident"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Item"/>
        </ns4:element>
        <ns4:element name="addItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.AddItem"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExplanationOfBenefit.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="total">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Total"/>
        </ns4:element>
        <ns4:element name="payment" elementType="FHIR.ExplanationOfBenefit.Payment"/>
        <ns4:element name="formCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="form" elementType="FHIR.Attachment"/>
        <ns4:element name="processNote">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.ProcessNote"/>
        </ns4:element>
        <ns4:element name="benefitPeriod" elementType="FHIR.Period"/>
        <ns4:element name="benefitBalance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.BenefitBalance"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="provider"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="party"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="provider"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="party"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="udi"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="party"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Accident" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.AddItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="detailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="subDetailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="provider">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExplanationOfBenefit.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.AddItem.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.AddItem.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExplanationOfBenefit.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.AddItem.Detail.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.AddItem.Detail.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExplanationOfBenefit.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.BenefitBalance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="excluded" elementType="FHIR.boolean"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="network" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="term" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="financial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.BenefitBalance.Financial"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.BenefitBalance.Financial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allowed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="used">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.CareTeam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="responsible" elementType="FHIR.boolean"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="qualification" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="onAdmission" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="packageCode" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="preAuthRef">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="careTeamSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="diagnosisSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="procedureSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="informationSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="encounter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Item.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Item.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Item.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExplanationOfBenefit.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Item.Detail.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Item.Detail.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ExplanationOfBenefit.Item.Adjudication"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Payee" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Payment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="adjustment" elementType="FHIR.Money"/>
        <ns4:element name="adjustmentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" elementType="FHIR.positiveInt"/>
        <ns4:element name="type" elementType="FHIR.NoteType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="claim" elementType="FHIR.Reference"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.SupportingInfo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reason" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefit.Total" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExplanationOfBenefitStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExposureState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Expression" identifier="http://hl7.org/fhir/StructureDefinition/Expression" label="Expression" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="reference" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Extension" identifier="http://hl7.org/fhir/StructureDefinition/Extension" label="Extension" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ExtensionContextType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FHIRAllTypes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FHIRDefinedType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FHIRDeviceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FHIRResourceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FHIRSubstanceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FHIRVersion" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FamilyHistoryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FamilyMemberHistory" identifier="http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory" label="FamilyMemberHistory" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FamilyHistoryStatus"/>
        <ns4:element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sex" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="born">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="age">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="estimatedAge" elementType="FHIR.boolean"/>
        <ns4:element name="deceased">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FamilyMemberHistory.Condition"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FamilyMemberHistory.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="contributedToDeath" elementType="FHIR.boolean"/>
        <ns4:element name="onset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FilterOperator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Flag" identifier="http://hl7.org/fhir/StructureDefinition/Flag" label="Flag" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FlagStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="author"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="FlagStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Goal" identifier="http://hl7.org/fhir/StructureDefinition/Goal" label="Goal" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="lifecycleStatus" elementType="FHIR.GoalLifecycleStatus"/>
        <ns4:element name="achievementStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="start">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Goal.Target"/>
        </ns4:element>
        <ns4:element name="statusDate" elementType="FHIR.date"/>
        <ns4:element name="statusReason" elementType="FHIR.string"/>
        <ns4:element name="expressedBy" elementType="FHIR.Reference"/>
        <ns4:element name="addresses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="outcomeCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcomeReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Goal.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="measure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="due">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GoalLifecycleStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GraphCompartmentRule" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GraphCompartmentUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GraphDefinition" identifier="http://hl7.org/fhir/StructureDefinition/GraphDefinition" label="GraphDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="start" elementType="FHIR.ResourceType"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GraphDefinition.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="sliceName" elementType="FHIR.string"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Link.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GraphDefinition.Link.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ResourceType"/>
        <ns4:element name="params" elementType="FHIR.string"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="compartment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Link.Target.Compartment"/>
        </ns4:element>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="GraphDefinition.Link"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GraphDefinition.Link.Target.Compartment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="use" elementType="FHIR.GraphCompartmentUse"/>
        <ns4:element name="code" elementType="FHIR.CompartmentCode"/>
        <ns4:element name="rule" elementType="FHIR.GraphCompartmentRule"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Group" identifier="http://hl7.org/fhir/StructureDefinition/Group" label="Group" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.GroupType"/>
        <ns4:element name="actual" elementType="FHIR.boolean"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="quantity" elementType="FHIR.unsignedInt"/>
        <ns4:element name="managingEntity" elementType="FHIR.Reference"/>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Group.Characteristic"/>
        </ns4:element>
        <ns4:element name="member">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Group.Member"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="entity"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="entity"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="entity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Group.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="exclude" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Group.Member" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="inactive" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GroupMeasure" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GroupType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GuidanceResponse" identifier="http://hl7.org/fhir/StructureDefinition/GuidanceResponse" label="GuidanceResponse" retrievable="true" primaryCodePath="module" baseType="FHIR.DomainResource">
        <ns4:element name="requestIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="module">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.GuidanceResponseStatus"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrenceDateTime" elementType="FHIR.dateTime"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="evaluationMessage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="outputParameters" elementType="FHIR.Reference"/>
        <ns4:element name="result" elementType="FHIR.Reference"/>
        <ns4:element name="dataRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GuidanceResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GuidePageGeneration" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="GuideParameterCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="HTTPVerb" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="HealthcareService" identifier="http://hl7.org/fhir/StructureDefinition/HealthcareService" label="HealthcareService" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="providedBy" elementType="FHIR.Reference"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="extraDetails" elementType="FHIR.markdown"/>
        <ns4:element name="photo" elementType="FHIR.Attachment"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="coverageArea">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="serviceProvisionCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="eligibility">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.Eligibility"/>
        </ns4:element>
        <ns4:element name="program">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="referralMethod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentRequired" elementType="FHIR.boolean"/>
        <ns4:element name="availableTime">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.AvailableTime"/>
        </ns4:element>
        <ns4:element name="notAvailable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.NotAvailable"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" elementType="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="HealthcareService.AvailableTime" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" elementType="FHIR.boolean"/>
        <ns4:element name="availableStartTime" elementType="FHIR.time"/>
        <ns4:element name="availableEndTime" elementType="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="HealthcareService.Eligibility" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="comment" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="HealthcareService.NotAvailable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="during" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="HumanName" identifier="http://hl7.org/fhir/StructureDefinition/HumanName" label="HumanName" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" elementType="FHIR.NameUse"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="family" elementType="FHIR.string"/>
        <ns4:element name="given">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="prefix">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="suffix">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Identifier" identifier="http://hl7.org/fhir/StructureDefinition/Identifier" label="Identifier" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" elementType="FHIR.IdentifierUse"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="assigner" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="IdentifierUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="IdentityAssuranceLevel" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImagingStudy" identifier="http://hl7.org/fhir/StructureDefinition/ImagingStudy" label="ImagingStudy" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ImagingStudyStatus"/>
        <ns4:element name="modality">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="started" elementType="FHIR.dateTime"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="referrer" elementType="FHIR.Reference"/>
        <ns4:element name="interpreter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="numberOfSeries" elementType="FHIR.unsignedInt"/>
        <ns4:element name="numberOfInstances" elementType="FHIR.unsignedInt"/>
        <ns4:element name="procedureReference" elementType="FHIR.Reference"/>
        <ns4:element name="procedureCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="series">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Series"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImagingStudy.Series" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" elementType="FHIR.id"/>
        <ns4:element name="number" elementType="FHIR.unsignedInt"/>
        <ns4:element name="modality" elementType="FHIR.Coding"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="numberOfInstances" elementType="FHIR.unsignedInt"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.Coding"/>
        <ns4:element name="laterality" elementType="FHIR.Coding"/>
        <ns4:element name="specimen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="started" elementType="FHIR.dateTime"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Series.Performer"/>
        </ns4:element>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Series.Instance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImagingStudy.Series.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" elementType="FHIR.id"/>
        <ns4:element name="sopClass" elementType="FHIR.Coding"/>
        <ns4:element name="number" elementType="FHIR.unsignedInt"/>
        <ns4:element name="title" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImagingStudy.Series.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImagingStudyStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Immunization" identifier="http://hl7.org/fhir/StructureDefinition/Immunization" label="Immunization" retrievable="true" primaryCodePath="vaccineCode" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ImmunizationStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="vaccineCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recorded" elementType="FHIR.dateTime"/>
        <ns4:element name="primarySource" elementType="FHIR.boolean"/>
        <ns4:element name="reportOrigin" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="manufacturer" elementType="FHIR.Reference"/>
        <ns4:element name="lotNumber" elementType="FHIR.string"/>
        <ns4:element name="expirationDate" elementType="FHIR.date"/>
        <ns4:element name="site" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="route" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doseQuantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Performer"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="isSubpotent" elementType="FHIR.boolean"/>
        <ns4:element name="subpotentReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="education">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Education"/>
        </ns4:element>
        <ns4:element name="programEligibility">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="fundingSource" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Reaction"/>
        </ns4:element>
        <ns4:element name="protocolApplied">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.ProtocolApplied"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Immunization.Education" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="documentType" elementType="FHIR.string"/>
        <ns4:element name="reference" elementType="FHIR.uri"/>
        <ns4:element name="publicationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="presentationDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Immunization.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Immunization.ProtocolApplied" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="series" elementType="FHIR.string"/>
        <ns4:element name="authority" elementType="FHIR.Reference"/>
        <ns4:element name="targetDisease">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="doseNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="seriesDoses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Immunization.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="detail" elementType="FHIR.Reference"/>
        <ns4:element name="reported" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImmunizationEvaluation" identifier="http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation" label="ImmunizationEvaluation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ImmunizationEvaluationStatus"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="authority" elementType="FHIR.Reference"/>
        <ns4:element name="targetDisease" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="immunizationEvent" elementType="FHIR.Reference"/>
        <ns4:element name="doseStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doseStatusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="series" elementType="FHIR.string"/>
        <ns4:element name="doseNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="seriesDoses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImmunizationEvaluationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImmunizationRecommendation" identifier="http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation" label="ImmunizationRecommendation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="authority" elementType="FHIR.Reference"/>
        <ns4:element name="recommendation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImmunizationRecommendation.Recommendation"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImmunizationRecommendation.Recommendation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="vaccineCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="targetDisease" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="contraindicatedVaccineCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="forecastStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="forecastReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="dateCriterion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImmunizationRecommendation.Recommendation.DateCriterion"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="series" elementType="FHIR.string"/>
        <ns4:element name="doseNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="seriesDoses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="supportingImmunization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingPatientInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImmunizationRecommendation.Recommendation.DateCriterion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImmunizationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide" identifier="http://hl7.org/fhir/StructureDefinition/ImplementationGuide" label="ImplementationGuide" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="packageId" elementType="FHIR.id"/>
        <ns4:element name="license" elementType="FHIR.SPDXLicense"/>
        <ns4:element name="fhirVersion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FHIRVersion"/>
        </ns4:element>
        <ns4:element name="dependsOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.DependsOn"/>
        </ns4:element>
        <ns4:element name="global">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Global"/>
        </ns4:element>
        <ns4:element name="definition" elementType="FHIR.ImplementationGuide.Definition"/>
        <ns4:element name="manifest" elementType="FHIR.ImplementationGuide.Manifest"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Definition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="grouping">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Definition.Grouping"/>
        </ns4:element>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Definition.Resource"/>
        </ns4:element>
        <ns4:element name="page" elementType="FHIR.ImplementationGuide.Definition.Page"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Definition.Parameter"/>
        </ns4:element>
        <ns4:element name="template">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Definition.Template"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Definition.Grouping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Definition.Page" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="generation" elementType="FHIR.GuidePageGeneration"/>
        <ns4:element name="page">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ImplementationGuide.Definition.Page"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Definition.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.GuideParameterCode"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Definition.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="fhirVersion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FHIRVersion"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="example">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="groupingId" elementType="FHIR.id"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Definition.Template" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="source" elementType="FHIR.string"/>
        <ns4:element name="scope" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.DependsOn" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uri" elementType="FHIR.canonical"/>
        <ns4:element name="packageId" elementType="FHIR.id"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Global" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ResourceType"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Manifest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="rendering" elementType="FHIR.url"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Manifest.Resource"/>
        </ns4:element>
        <ns4:element name="page">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Manifest.Page"/>
        </ns4:element>
        <ns4:element name="image">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="other">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Manifest.Page" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="anchor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ImplementationGuide.Manifest.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="example">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="relativePath" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan" identifier="http://hl7.org/fhir/StructureDefinition/InsurancePlan" label="InsurancePlan" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="ownedBy" elementType="FHIR.Reference"/>
        <ns4:element name="administeredBy" elementType="FHIR.Reference"/>
        <ns4:element name="coverageArea">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Contact"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="coverage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Coverage"/>
        </ns4:element>
        <ns4:element name="plan">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Plan"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="purpose" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Coverage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="benefit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Coverage.Benefit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Coverage.Benefit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="requirement" elementType="FHIR.string"/>
        <ns4:element name="limit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Coverage.Benefit.Limit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Coverage.Benefit.Limit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value" elementType="FHIR.Quantity"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Plan" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="coverageArea">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="generalCost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Plan.GeneralCost"/>
        </ns4:element>
        <ns4:element name="specificCost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Plan.SpecificCost"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Plan.GeneralCost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="groupSize" elementType="FHIR.positiveInt"/>
        <ns4:element name="cost" elementType="FHIR.Money"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Plan.SpecificCost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="benefit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Plan.SpecificCost.Benefit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Plan.SpecificCost.Benefit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="cost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Plan.SpecificCost.Benefit.Cost"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InsurancePlan.Plan.SpecificCost.Benefit.Cost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="applicability" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="qualifiers">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="value" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Invoice" identifier="http://hl7.org/fhir/StructureDefinition/Invoice" label="Invoice" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.InvoiceStatus"/>
        <ns4:element name="cancelledReason" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="recipient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Invoice.Participant"/>
        </ns4:element>
        <ns4:element name="issuer" elementType="FHIR.Reference"/>
        <ns4:element name="account" elementType="FHIR.Reference"/>
        <ns4:element name="lineItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Invoice.LineItem"/>
        </ns4:element>
        <ns4:element name="totalPriceComponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Invoice.LineItem.PriceComponent"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="totalNet" elementType="FHIR.Money"/>
        <ns4:element name="totalGross" elementType="FHIR.Money"/>
        <ns4:element name="paymentTerms" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="recipient"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Invoice.LineItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="chargeItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="priceComponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Invoice.LineItem.PriceComponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Invoice.LineItem.PriceComponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.InvoicePriceComponentType"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Invoice.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InvoicePriceComponentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="InvoiceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="IssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="IssueType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Library" identifier="http://hl7.org/fhir/StructureDefinition/Library" label="Library" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ParameterDefinition"/>
        </ns4:element>
        <ns4:element name="dataRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="LinkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Linkage" identifier="http://hl7.org/fhir/StructureDefinition/Linkage" label="Linkage" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Linkage.Item"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Linkage.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.LinkageType"/>
        <ns4:element name="resource" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="LinkageType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="List" identifier="http://hl7.org/fhir/StructureDefinition/List" label="List" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ListStatus"/>
        <ns4:element name="mode" elementType="FHIR.ListMode"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="orderedBy" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="entry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.List.Entry"/>
        </ns4:element>
        <ns4:element name="emptyReason" elementType="FHIR.CodeableConcept"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="source"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="source"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="source"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="List.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="flag" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="deleted" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="item" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ListStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Location" identifier="http://hl7.org/fhir/StructureDefinition/Location" label="Location" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.LocationStatus"/>
        <ns4:element name="operationalStatus" elementType="FHIR.Coding"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="mode" elementType="FHIR.LocationMode"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
        <ns4:element name="physicalType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="position" elementType="FHIR.Location.Position"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
        <ns4:element name="hoursOfOperation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Location.HoursOfOperation"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" elementType="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Location.HoursOfOperation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" elementType="FHIR.boolean"/>
        <ns4:element name="openingTime" elementType="FHIR.time"/>
        <ns4:element name="closingTime" elementType="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Location.Position" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="longitude" elementType="FHIR.decimal"/>
        <ns4:element name="latitude" elementType="FHIR.decimal"/>
        <ns4:element name="altitude" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="LocationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="LocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MarketingStatus" identifier="http://hl7.org/fhir/StructureDefinition/MarketingStatus" label="MarketingStatus" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="country" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdiction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dateRange" elementType="FHIR.Period"/>
        <ns4:element name="restoreDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Measure" identifier="http://hl7.org/fhir/StructureDefinition/Measure" label="Measure" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="disclaimer" elementType="FHIR.markdown"/>
        <ns4:element name="scoring" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="compositeScoring" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="riskAdjustment" elementType="FHIR.string"/>
        <ns4:element name="rateAggregation" elementType="FHIR.string"/>
        <ns4:element name="rationale" elementType="FHIR.markdown"/>
        <ns4:element name="clinicalRecommendationStatement" elementType="FHIR.markdown"/>
        <ns4:element name="improvementNotation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.markdown"/>
        </ns4:element>
        <ns4:element name="guidance" elementType="FHIR.markdown"/>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Group"/>
        </ns4:element>
        <ns4:element name="supplementalData">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.SupplementalData"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Measure.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Group.Population"/>
        </ns4:element>
        <ns4:element name="stratifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Group.Stratifier"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Measure.Group.Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Measure.Group.Stratifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Group.Stratifier.Component"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Measure.Group.Stratifier.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Measure.SupplementalData" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="usage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReport" identifier="http://hl7.org/fhir/StructureDefinition/MeasureReport" label="MeasureReport" retrievable="true" primaryCodePath="measure.topic" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MeasureReportStatus"/>
        <ns4:element name="type" elementType="FHIR.MeasureReportType"/>
        <ns4:element name="measure" elementType="FHIR.canonical"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="reporter" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="improvementNotation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group"/>
        </ns4:element>
        <ns4:element name="evaluatedResource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReport.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group.Population"/>
        </ns4:element>
        <ns4:element name="measureScore" elementType="FHIR.Quantity"/>
        <ns4:element name="stratifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group.Stratifier"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReport.Group.Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="count" elementType="FHIR.integer"/>
        <ns4:element name="subjectResults" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReport.Group.Stratifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="stratum">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group.Stratifier.Stratum"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReport.Group.Stratifier.Stratum" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group.Stratifier.Stratum.Component"/>
        </ns4:element>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group.Stratifier.Stratum.Population"/>
        </ns4:element>
        <ns4:element name="measureScore" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReport.Group.Stratifier.Stratum.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReport.Group.Stratifier.Stratum.Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="count" elementType="FHIR.integer"/>
        <ns4:element name="subjectResults" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MeasureReportType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Media" identifier="http://hl7.org/fhir/StructureDefinition/Media" label="Media" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MediaStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modality" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="view" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="created">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="issued" elementType="FHIR.instant"/>
        <ns4:element name="operator" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="deviceName" elementType="FHIR.string"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="height" elementType="FHIR.positiveInt"/>
        <ns4:element name="width" elementType="FHIR.positiveInt"/>
        <ns4:element name="frames" elementType="FHIR.positiveInt"/>
        <ns4:element name="duration" elementType="FHIR.decimal"/>
        <ns4:element name="content" elementType="FHIR.Attachment"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="operator"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MediaStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Medication" identifier="http://hl7.org/fhir/StructureDefinition/Medication" label="Medication" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.MedicationStatus"/>
        <ns4:element name="manufacturer" elementType="FHIR.Reference"/>
        <ns4:element name="form" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Ratio"/>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Medication.Ingredient"/>
        </ns4:element>
        <ns4:element name="batch" elementType="FHIR.Medication.Batch"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Medication.Batch" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lotNumber" elementType="FHIR.string"/>
        <ns4:element name="expirationDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Medication.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="isActive" elementType="FHIR.boolean"/>
        <ns4:element name="strength" elementType="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationAdministration" identifier="http://hl7.org/fhir/StructureDefinition/MedicationAdministration" label="MedicationAdministration" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiates">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MedicationAdministrationStatus"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationAdministration.Performer"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="device">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosage" elementType="FHIR.MedicationAdministration.Dosage"/>
        <ns4:element name="eventHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="context"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="device"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationAdministration.Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="site" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="route" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dose" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="rate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationAdministration.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationAdministrationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationDispense" identifier="http://hl7.org/fhir/StructureDefinition/MedicationDispense" label="MedicationDispense" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MedicationDispenseStatus"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationDispense.Performer"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="authorizingPrescription">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="daysSupply" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="whenPrepared" elementType="FHIR.dateTime"/>
        <ns4:element name="whenHandedOver" elementType="FHIR.dateTime"/>
        <ns4:element name="destination" elementType="FHIR.Reference"/>
        <ns4:element name="receiver">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosageInstruction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="substitution" elementType="FHIR.MedicationDispense.Substitution"/>
        <ns4:element name="detectedIssue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="eventHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="receiver"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="receiver"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationDispense.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationDispense.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="wasSubstituted" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="responsibleParty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationDispenseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge" identifier="http://hl7.org/fhir/StructureDefinition/MedicationKnowledge" label="MedicationKnowledge" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.MedicationKnowledgeStatus"/>
        <ns4:element name="manufacturer" elementType="FHIR.Reference"/>
        <ns4:element name="doseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="synonym">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="relatedMedicationKnowledge">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.RelatedMedicationKnowledge"/>
        </ns4:element>
        <ns4:element name="associatedMedication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="productType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="monograph">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Monograph"/>
        </ns4:element>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Ingredient"/>
        </ns4:element>
        <ns4:element name="preparationInstruction" elementType="FHIR.markdown"/>
        <ns4:element name="intendedRoute">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="cost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Cost"/>
        </ns4:element>
        <ns4:element name="monitoringProgram">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.MonitoringProgram"/>
        </ns4:element>
        <ns4:element name="administrationGuidelines">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.AdministrationGuidelines"/>
        </ns4:element>
        <ns4:element name="medicineClassification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.MedicineClassification"/>
        </ns4:element>
        <ns4:element name="packaging" elementType="FHIR.MedicationKnowledge.Packaging"/>
        <ns4:element name="drugCharacteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.DrugCharacteristic"/>
        </ns4:element>
        <ns4:element name="contraindication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="regulatory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Regulatory"/>
        </ns4:element>
        <ns4:element name="kinetics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Kinetics"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.AdministrationGuidelines" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.AdministrationGuidelines.Dosage"/>
        </ns4:element>
        <ns4:element name="indication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="patientCharacteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.AdministrationGuidelines.Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Cost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source" elementType="FHIR.string"/>
        <ns4:element name="cost" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.DrugCharacteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="isActive" elementType="FHIR.boolean"/>
        <ns4:element name="strength" elementType="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Kinetics" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="areaUnderCurve">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SimpleQuantity"/>
        </ns4:element>
        <ns4:element name="lethalDose50">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SimpleQuantity"/>
        </ns4:element>
        <ns4:element name="halfLifePeriod" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.MedicineClassification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="classification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.MonitoringProgram" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Monograph" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Packaging" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Regulatory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="regulatoryAuthority" elementType="FHIR.Reference"/>
        <ns4:element name="substitution">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Regulatory.Substitution"/>
        </ns4:element>
        <ns4:element name="schedule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Regulatory.Schedule"/>
        </ns4:element>
        <ns4:element name="maxDispense" elementType="FHIR.MedicationKnowledge.Regulatory.MaxDispense"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Regulatory.MaxDispense" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="period" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Regulatory.Schedule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="schedule" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.Regulatory.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allowed" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledge.RelatedMedicationKnowledge" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationKnowledgeStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationRequest" identifier="http://hl7.org/fhir/StructureDefinition/MedicationRequest" label="MedicationRequest" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MedicationRequestStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intent" elementType="FHIR.MedicationRequestIntent"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.MedicationRequestPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="reported">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="performerType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="courseOfTherapyType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosageInstruction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="dispenseRequest" elementType="FHIR.MedicationRequest.DispenseRequest"/>
        <ns4:element name="substitution" elementType="FHIR.MedicationRequest.Substitution"/>
        <ns4:element name="priorPrescription" elementType="FHIR.Reference"/>
        <ns4:element name="detectedIssue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="eventHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationRequest.DispenseRequest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="initialFill" elementType="FHIR.MedicationRequest.DispenseRequest.InitialFill"/>
        <ns4:element name="dispenseInterval" elementType="FHIR.Duration"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="numberOfRepeatsAllowed" elementType="FHIR.unsignedInt"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="expectedSupplyDuration" elementType="FHIR.Duration"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationRequest.DispenseRequest.InitialFill" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="duration" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationRequest.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="allowed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationRequestIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationRequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationStatement" identifier="http://hl7.org/fhir/StructureDefinition/MedicationStatement" label="MedicationStatement" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MedicationStatementStatus"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dateAsserted" elementType="FHIR.dateTime"/>
        <ns4:element name="informationSource" elementType="FHIR.Reference"/>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="informationSource"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="informationSource"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationStatementStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProduct" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProduct" label="MedicinalProduct" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="domain" elementType="FHIR.Coding"/>
        <ns4:element name="combinedPharmaceuticalDoseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additionalMonitoringIndicator" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specialMeasures">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="paediatricUseIndicator" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productClassification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="marketingStatus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MarketingStatus"/>
        </ns4:element>
        <ns4:element name="pharmaceuticalProduct">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="packagedMedicinalProduct">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="attachedDocument">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="masterFile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="clinicalTrial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.Name"/>
        </ns4:element>
        <ns4:element name="crossReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="manufacturingBusinessOperation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.ManufacturingBusinessOperation"/>
        </ns4:element>
        <ns4:element name="specialDesignation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.SpecialDesignation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProduct.ManufacturingBusinessOperation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operationType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="authorisationReferenceNumber" elementType="FHIR.Identifier"/>
        <ns4:element name="effectiveDate" elementType="FHIR.dateTime"/>
        <ns4:element name="confidentialityIndicator" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="regulator" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProduct.Name" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productName" elementType="FHIR.string"/>
        <ns4:element name="namePart">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.Name.NamePart"/>
        </ns4:element>
        <ns4:element name="countryLanguage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.Name.CountryLanguage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProduct.Name.CountryLanguage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="country" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdiction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProduct.Name.NamePart" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="part" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProduct.SpecialDesignation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intendedUse" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="indication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="species" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductAuthorization" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization" label="MedicinalProductAuthorization" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="country">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="statusDate" elementType="FHIR.dateTime"/>
        <ns4:element name="restoreDate" elementType="FHIR.dateTime"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="dataExclusivityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="dateOfFirstAuthorization" elementType="FHIR.dateTime"/>
        <ns4:element name="internationalBirthDate" elementType="FHIR.dateTime"/>
        <ns4:element name="legalBasis" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdictionalAuthorization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductAuthorization.JurisdictionalAuthorization"/>
        </ns4:element>
        <ns4:element name="holder" elementType="FHIR.Reference"/>
        <ns4:element name="regulator" elementType="FHIR.Reference"/>
        <ns4:element name="procedure" elementType="FHIR.MedicinalProductAuthorization.Procedure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductAuthorization.JurisdictionalAuthorization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="country" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductAuthorization.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="application">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="MedicinalProductAuthorization.Procedure"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductContraindication" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication" label="MedicinalProductContraindication" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="disease" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="diseaseStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="comorbidity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="therapeuticIndication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="otherTherapy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductContraindication.OtherTherapy"/>
        </ns4:element>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Population"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductContraindication.OtherTherapy" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="therapyRelationshipType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductIndication" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication" label="MedicinalProductIndication" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="diseaseSymptomProcedure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="diseaseStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="comorbidity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="intendedEffect" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="duration" elementType="FHIR.Quantity"/>
        <ns4:element name="otherTherapy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIndication.OtherTherapy"/>
        </ns4:element>
        <ns4:element name="undesirableEffect">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Population"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductIndication.OtherTherapy" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="therapyRelationshipType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductIngredient" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient" label="MedicinalProductIngredient" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allergenicIndicator" elementType="FHIR.boolean"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="specifiedSubstance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIngredient.SpecifiedSubstance"/>
        </ns4:element>
        <ns4:element name="substance" elementType="FHIR.MedicinalProductIngredient.Substance"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="group" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="confidentiality" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="strength">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIngredient.SpecifiedSubstance.Strength"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance.Strength" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="presentation" elementType="FHIR.Ratio"/>
        <ns4:element name="presentationLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="concentration" elementType="FHIR.Ratio"/>
        <ns4:element name="concentrationLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="measurementPoint" elementType="FHIR.string"/>
        <ns4:element name="country">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="referenceStrength">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="strength" elementType="FHIR.Ratio"/>
        <ns4:element name="strengthLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="measurementPoint" elementType="FHIR.string"/>
        <ns4:element name="country">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductIngredient.Substance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="strength">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance.Strength"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductInteraction" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductInteraction" label="MedicinalProductInteraction" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="interactant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductInteraction.Interactant"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="effect" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="incidence" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="management" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductInteraction.Interactant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductManufactured" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured" label="MedicinalProductManufactured" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="manufacturedDoseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unitOfPresentation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
        <ns4:element name="otherCharacteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPackaged" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged" label="MedicinalProductPackaged" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="marketingStatus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MarketingStatus"/>
        </ns4:element>
        <ns4:element name="marketingAuthorization" elementType="FHIR.Reference"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="batchIdentifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPackaged.BatchIdentifier"/>
        </ns4:element>
        <ns4:element name="packageItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPackaged.PackageItem"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPackaged.BatchIdentifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outerPackaging" elementType="FHIR.Identifier"/>
        <ns4:element name="immediatePackaging" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPackaged.PackageItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="material">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="alternateMaterial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="device">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="manufacturedItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="packageItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="MedicinalProductPackaged.PackageItem"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
        <ns4:element name="otherCharacteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="shelfLifeStorage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ProductShelfLife"/>
        </ns4:element>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPharmaceutical" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical" label="MedicinalProductPharmaceutical" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="administrableDoseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unitOfPresentation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="device">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="characteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.Characteristics"/>
        </ns4:element>
        <ns4:element name="routeOfAdministration">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.RouteOfAdministration"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPharmaceutical.Characteristics" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPharmaceutical.RouteOfAdministration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="firstDose" elementType="FHIR.Quantity"/>
        <ns4:element name="maxSingleDose" elementType="FHIR.Quantity"/>
        <ns4:element name="maxDosePerDay" elementType="FHIR.Quantity"/>
        <ns4:element name="maxDosePerTreatmentPeriod" elementType="FHIR.Ratio"/>
        <ns4:element name="maxTreatmentPeriod" elementType="FHIR.Duration"/>
        <ns4:element name="targetSpecies">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="withdrawalPeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="tissue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.Quantity"/>
        <ns4:element name="supportingInformation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MedicinalProductUndesirableEffect" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect" label="MedicinalProductUndesirableEffect" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="symptomConditionEffect" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="classification" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="frequencyOfOccurrence" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Population"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageDefinition" identifier="http://hl7.org/fhir/StructureDefinition/MessageDefinition" label="MessageDefinition" retrievable="true" primaryCodePath="event" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="base" elementType="FHIR.canonical"/>
        <ns4:element name="parent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.MessageSignificanceCategory"/>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageDefinition.Focus"/>
        </ns4:element>
        <ns4:element name="responseRequired" elementType="FHIR.Messageheader_Response_Request"/>
        <ns4:element name="allowedResponse">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageDefinition.AllowedResponse"/>
        </ns4:element>
        <ns4:element name="graph">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageDefinition.AllowedResponse" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="message" elementType="FHIR.canonical"/>
        <ns4:element name="situation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageDefinition.Focus" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.ResourceType"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="min" elementType="FHIR.unsignedInt"/>
        <ns4:element name="max" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageHeader" identifier="http://hl7.org/fhir/StructureDefinition/MessageHeader" label="MessageHeader" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="destination">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageHeader.Destination"/>
        </ns4:element>
        <ns4:element name="sender" elementType="FHIR.Reference"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="source" elementType="FHIR.MessageHeader.Source"/>
        <ns4:element name="responsible" elementType="FHIR.Reference"/>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="response" elementType="FHIR.MessageHeader.Response"/>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="receiver"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="responsible"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="target"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageHeader.Destination" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="target" elementType="FHIR.Reference"/>
        <ns4:element name="endpoint" elementType="FHIR.url"/>
        <ns4:element name="receiver" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageHeader.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.id"/>
        <ns4:element name="code" elementType="FHIR.ResponseType"/>
        <ns4:element name="details" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageHeader.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="software" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="contact" elementType="FHIR.ContactPoint"/>
        <ns4:element name="endpoint" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MessageSignificanceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Messageheader_Response_Request" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Meta" identifier="http://hl7.org/fhir/StructureDefinition/Meta" label="Meta" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="versionId" elementType="FHIR.id"/>
        <ns4:element name="lastUpdated" elementType="FHIR.instant"/>
        <ns4:element name="source" elementType="FHIR.uri"/>
        <ns4:element name="profile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="security">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="tag">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MimeType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence" identifier="http://hl7.org/fhir/StructureDefinition/MolecularSequence" label="MolecularSequence" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.SequenceType"/>
        <ns4:element name="coordinateSystem" elementType="FHIR.integer"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="specimen" elementType="FHIR.Reference"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="referenceSeq" elementType="FHIR.MolecularSequence.ReferenceSeq"/>
        <ns4:element name="variant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.Variant"/>
        </ns4:element>
        <ns4:element name="observedSeq" elementType="FHIR.string"/>
        <ns4:element name="quality">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.Quality"/>
        </ns4:element>
        <ns4:element name="readCoverage" elementType="FHIR.integer"/>
        <ns4:element name="repository">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.Repository"/>
        </ns4:element>
        <ns4:element name="pointer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="structureVariant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.StructureVariant"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.Quality" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.QualityType"/>
        <ns4:element name="standardSequence" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
        <ns4:element name="score" elementType="FHIR.Quantity"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="truthTP" elementType="FHIR.decimal"/>
        <ns4:element name="queryTP" elementType="FHIR.decimal"/>
        <ns4:element name="truthFN" elementType="FHIR.decimal"/>
        <ns4:element name="queryFP" elementType="FHIR.decimal"/>
        <ns4:element name="gtFP" elementType="FHIR.decimal"/>
        <ns4:element name="precision" elementType="FHIR.decimal"/>
        <ns4:element name="recall" elementType="FHIR.decimal"/>
        <ns4:element name="fScore" elementType="FHIR.decimal"/>
        <ns4:element name="roc" elementType="FHIR.MolecularSequence.Quality.Roc"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.Quality.Roc" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="score">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="numTP">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="numFP">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="numFN">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="precision">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.decimal"/>
        </ns4:element>
        <ns4:element name="sensitivity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.decimal"/>
        </ns4:element>
        <ns4:element name="fMeasure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.decimal"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.ReferenceSeq" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="chromosome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="genomeBuild" elementType="FHIR.string"/>
        <ns4:element name="orientation" elementType="FHIR.OrientationType"/>
        <ns4:element name="referenceSeqId" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="referenceSeqPointer" elementType="FHIR.Reference"/>
        <ns4:element name="referenceSeqString" elementType="FHIR.string"/>
        <ns4:element name="strand" elementType="FHIR.StrandType"/>
        <ns4:element name="windowStart" elementType="FHIR.integer"/>
        <ns4:element name="windowEnd" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.Repository" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.RepositoryType"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="datasetId" elementType="FHIR.string"/>
        <ns4:element name="variantsetId" elementType="FHIR.string"/>
        <ns4:element name="readsetId" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.StructureVariant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="variantType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="exact" elementType="FHIR.boolean"/>
        <ns4:element name="length" elementType="FHIR.integer"/>
        <ns4:element name="outer" elementType="FHIR.MolecularSequence.StructureVariant.Outer"/>
        <ns4:element name="inner" elementType="FHIR.MolecularSequence.StructureVariant.Inner"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.StructureVariant.Inner" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.StructureVariant.Outer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MolecularSequence.Variant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
        <ns4:element name="observedAllele" elementType="FHIR.string"/>
        <ns4:element name="referenceAllele" elementType="FHIR.string"/>
        <ns4:element name="cigar" elementType="FHIR.string"/>
        <ns4:element name="variantPointer" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Money" identifier="http://hl7.org/fhir/StructureDefinition/Money" label="Money" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="currency" elementType="FHIR.CurrencyCode"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="MoneyQuantity" identifier="http://hl7.org/fhir/StructureDefinition/MoneyQuantity" label="MoneyQuantity" retrievable="false" primaryCodePath="code" baseType="FHIR.Quantity">
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="comparator" elementType="FHIR.QuantityComparator"/>
        <ns4:element name="unit" elementType="FHIR.string"/>
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="code" elementType="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NameUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NamingSystem" identifier="http://hl7.org/fhir/StructureDefinition/NamingSystem" label="NamingSystem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="kind" elementType="FHIR.NamingSystemType"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="responsible" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="uniqueId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NamingSystem.UniqueId"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NamingSystem.UniqueId" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.NamingSystemIdentifierType"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NamingSystemIdentifierType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NamingSystemType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Narrative" identifier="http://hl7.org/fhir/StructureDefinition/Narrative" label="Narrative" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="status" elementType="FHIR.NarrativeStatus"/>
        <ns4:element name="div" elementType="FHIR.xhtml"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NarrativeStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NoteType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritiionOrderIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrder" identifier="http://hl7.org/fhir/StructureDefinition/NutritionOrder" label="NutritionOrder" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="instantiates">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.NutritionOrderStatus"/>
        <ns4:element name="intent" elementType="FHIR.NutritiionOrderIntent"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="dateTime" elementType="FHIR.dateTime"/>
        <ns4:element name="orderer" elementType="FHIR.Reference"/>
        <ns4:element name="allergyIntolerance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="foodPreferenceModifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="excludeFoodModifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="oralDiet" elementType="FHIR.NutritionOrder.OralDiet"/>
        <ns4:element name="supplement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Supplement"/>
        </ns4:element>
        <ns4:element name="enteralFormula" elementType="FHIR.NutritionOrder.EnteralFormula"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="orderer"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrder.EnteralFormula" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="baseFormulaType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="baseFormulaProductName" elementType="FHIR.string"/>
        <ns4:element name="additiveType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additiveProductName" elementType="FHIR.string"/>
        <ns4:element name="caloricDensity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="routeofAdministration" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="administration">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.EnteralFormula.Administration"/>
        </ns4:element>
        <ns4:element name="maxVolumeToDeliver" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="administrationInstruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrder.EnteralFormula.Administration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="schedule" elementType="FHIR.Timing"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="rate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrder.OralDiet" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="schedule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Timing"/>
        </ns4:element>
        <ns4:element name="nutrient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.OralDiet.Nutrient"/>
        </ns4:element>
        <ns4:element name="texture">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.OralDiet.Texture"/>
        </ns4:element>
        <ns4:element name="fluidConsistencyType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="instruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrder.OralDiet.Nutrient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrder.OralDiet.Texture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="foodType" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrder.Supplement" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productName" elementType="FHIR.string"/>
        <ns4:element name="schedule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Timing"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="instruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="NutritionOrderStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Observation" identifier="http://hl7.org/fhir/StructureDefinition/Observation" label="Observation" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ObservationStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="issued" elementType="FHIR.instant"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="interpretation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specimen" elementType="FHIR.Reference"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="referenceRange">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.ReferenceRange"/>
        </ns4:element>
        <ns4:element name="hasMember">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.Component"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="device"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="performer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Observation.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="interpretation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="referenceRange">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Observation.ReferenceRange"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Observation.ReferenceRange" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="low" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="high" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="appliesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="age" elementType="FHIR.Range"/>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ObservationDataType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ObservationDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ObservationDefinition" label="ObservationDefinition" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="permittedDataType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ObservationDataType"/>
        </ns4:element>
        <ns4:element name="multipleResultsAllowed" elementType="FHIR.boolean"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferredReportName" elementType="FHIR.string"/>
        <ns4:element name="quantitativeDetails" elementType="FHIR.ObservationDefinition.QuantitativeDetails"/>
        <ns4:element name="qualifiedInterval">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ObservationDefinition.QualifiedInterval"/>
        </ns4:element>
        <ns4:element name="validCodedValueSet" elementType="FHIR.Reference"/>
        <ns4:element name="normalCodedValueSet" elementType="FHIR.Reference"/>
        <ns4:element name="abnormalCodedValueSet" elementType="FHIR.Reference"/>
        <ns4:element name="criticalCodedValueSet" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ObservationDefinition.QualifiedInterval" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.ObservationRangeCategory"/>
        <ns4:element name="range" elementType="FHIR.Range"/>
        <ns4:element name="context" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="appliesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="age" elementType="FHIR.Range"/>
        <ns4:element name="gestationalAge" elementType="FHIR.Range"/>
        <ns4:element name="condition" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ObservationDefinition.QuantitativeDetails" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="customaryUnit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="conversionFactor" elementType="FHIR.decimal"/>
        <ns4:element name="decimalPrecision" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ObservationRangeCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ObservationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationDefinition" identifier="http://hl7.org/fhir/StructureDefinition/OperationDefinition" label="OperationDefinition" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="kind" elementType="FHIR.OperationKind"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="affectsState" elementType="FHIR.boolean"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="comment" elementType="FHIR.markdown"/>
        <ns4:element name="base" elementType="FHIR.canonical"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="system" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.boolean"/>
        <ns4:element name="instance" elementType="FHIR.boolean"/>
        <ns4:element name="inputProfile" elementType="FHIR.canonical"/>
        <ns4:element name="outputProfile" elementType="FHIR.canonical"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Parameter"/>
        </ns4:element>
        <ns4:element name="overload">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Overload"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationDefinition.Overload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="parameterName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationDefinition.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.OperationParameterUse"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.FHIRAllTypes"/>
        <ns4:element name="targetProfile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="searchType" elementType="FHIR.SearchParamType"/>
        <ns4:element name="binding" elementType="FHIR.OperationDefinition.Parameter.Binding"/>
        <ns4:element name="referencedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Parameter.ReferencedFrom"/>
        </ns4:element>
        <ns4:element name="part">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="OperationDefinition.Parameter"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationDefinition.Parameter.Binding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="strength" elementType="FHIR.BindingStrength"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationDefinition.Parameter.ReferencedFrom" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="source" elementType="FHIR.string"/>
        <ns4:element name="sourceId" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationOutcome" identifier="http://hl7.org/fhir/StructureDefinition/OperationOutcome" label="OperationOutcome" retrievable="true" primaryCodePath="issue.code" baseType="FHIR.DomainResource">
        <ns4:element name="issue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationOutcome.Issue"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationOutcome.Issue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="severity" elementType="FHIR.IssueSeverity"/>
        <ns4:element name="code" elementType="FHIR.IssueType"/>
        <ns4:element name="details" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="diagnostics" elementType="FHIR.string"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="expression">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OperationParameterUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Organization" identifier="http://hl7.org/fhir/StructureDefinition/Organization" label="Organization" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Organization.Contact"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Organization.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="purpose" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OrganizationAffiliation" identifier="http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation" label="OrganizationAffiliation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="participatingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="healthcareService">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="OrientationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ParameterDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ParameterDefinition" label="ParameterDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="name" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.ParameterUse"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.FHIRAllTypes"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ParameterUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Parameters" identifier="http://hl7.org/fhir/StructureDefinition/Parameters" label="Parameters" retrievable="true" baseType="FHIR.Resource">
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Parameters.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Parameters.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="resource" elementType="FHIR.Resource"/>
        <ns4:element name="part">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Parameters.Parameter"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ParticipantRequired" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ParticipantStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ParticipationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Patient" identifier="http://hl7.org/fhir/StructureDefinition/Patient" label="Patient" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="deceased">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="maritalStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="multipleBirth">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="photo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Contact"/>
        </ns4:element>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Communication"/>
        </ns4:element>
        <ns4:element name="generalPractitioner">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Link"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="generalPractitioner"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="other"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="other"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Patient.Communication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Patient.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relationship">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Patient.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="other" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.LinkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PaymentNotice" identifier="http://hl7.org/fhir/StructureDefinition/PaymentNotice" label="PaymentNotice" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PaymentNoticeStatus"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="response" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="payment" elementType="FHIR.Reference"/>
        <ns4:element name="paymentDate" elementType="FHIR.date"/>
        <ns4:element name="payee" elementType="FHIR.Reference"/>
        <ns4:element name="recipient" elementType="FHIR.Reference"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="paymentStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="provider"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PaymentNoticeStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PaymentReconciliation" identifier="http://hl7.org/fhir/StructureDefinition/PaymentReconciliation" label="PaymentReconciliation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PaymentReconciliationStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="paymentIssuer" elementType="FHIR.Reference"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="requestor" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="paymentDate" elementType="FHIR.date"/>
        <ns4:element name="paymentAmount" elementType="FHIR.Money"/>
        <ns4:element name="paymentIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PaymentReconciliation.Detail"/>
        </ns4:element>
        <ns4:element name="formCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="processNote">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PaymentReconciliation.ProcessNote"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requestor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PaymentReconciliation.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="predecessor" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="submitter" elementType="FHIR.Reference"/>
        <ns4:element name="response" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="responsible" elementType="FHIR.Reference"/>
        <ns4:element name="payee" elementType="FHIR.Reference"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PaymentReconciliation.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.NoteType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PaymentReconciliationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Period" identifier="http://hl7.org/fhir/StructureDefinition/Period" label="Period" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="start" elementType="FHIR.dateTime"/>
        <ns4:element name="end" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Person" identifier="http://hl7.org/fhir/StructureDefinition/Person" label="Person" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="photo" elementType="FHIR.Attachment"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Person.Link"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="where(resolve() is Practitioner)"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="target"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Person.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="target" elementType="FHIR.Reference"/>
        <ns4:element name="assurance" elementType="FHIR.IdentityAssuranceLevel"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition" identifier="http://hl7.org/fhir/StructureDefinition/PlanDefinition" label="PlanDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Goal"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="prefix" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="textEquivalent" elementType="FHIR.string"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="goalId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.id"/>
        </ns4:element>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="trigger">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TriggerDefinition"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action.Condition"/>
        </ns4:element>
        <ns4:element name="input">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="output">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="relatedAction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action.RelatedAction"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action.Participant"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="groupingBehavior" elementType="FHIR.ActionGroupingBehavior"/>
        <ns4:element name="selectionBehavior" elementType="FHIR.ActionSelectionBehavior"/>
        <ns4:element name="requiredBehavior" elementType="FHIR.ActionRequiredBehavior"/>
        <ns4:element name="precheckBehavior" elementType="FHIR.ActionPrecheckBehavior"/>
        <ns4:element name="cardinalityBehavior" elementType="FHIR.ActionCardinalityBehavior"/>
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="transform" elementType="FHIR.canonical"/>
        <ns4:element name="dynamicValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action.DynamicValue"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="PlanDefinition.Action"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition.Action.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" elementType="FHIR.ActionConditionKind"/>
        <ns4:element name="expression" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition.Action.DynamicValue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition.Action.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ActionParticipantType"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition.Action.RelatedAction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actionId" elementType="FHIR.id"/>
        <ns4:element name="relationship" elementType="FHIR.ActionRelationshipType"/>
        <ns4:element name="offset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition.Goal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="start" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="addresses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Goal.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PlanDefinition.Goal.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="measure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="due" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Population" identifier="http://hl7.org/fhir/StructureDefinition/Population" label="Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="age">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="race" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="physiologicalCondition" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Practitioner" identifier="http://hl7.org/fhir/StructureDefinition/Practitioner" label="Practitioner" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="photo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="qualification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Practitioner.Qualification"/>
        </ns4:element>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Practitioner.Qualification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="issuer" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PractitionerRole" identifier="http://hl7.org/fhir/StructureDefinition/PractitionerRole" label="PractitionerRole" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="practitioner" elementType="FHIR.Reference"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="healthcareService">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="availableTime">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PractitionerRole.AvailableTime"/>
        </ns4:element>
        <ns4:element name="notAvailable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PractitionerRole.NotAvailable"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" elementType="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="practitioner"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PractitionerRole.AvailableTime" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" elementType="FHIR.boolean"/>
        <ns4:element name="availableStartTime" elementType="FHIR.time"/>
        <ns4:element name="availableEndTime" elementType="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PractitionerRole.NotAvailable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="during" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Procedure" identifier="http://hl7.org/fhir/StructureDefinition/Procedure" label="Procedure" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ProcedureStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="performed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="asserter" elementType="FHIR.Reference"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Procedure.Performer"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="report">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="complication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="complicationDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="followUp">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="focalDevice">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Procedure.FocalDevice"/>
        </ns4:element>
        <ns4:element name="usedReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="usedCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Procedure.FocalDevice" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="manipulated" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Procedure.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ProcedureStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ProdCharacteristic" identifier="http://hl7.org/fhir/StructureDefinition/ProdCharacteristic" label="ProdCharacteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="height" elementType="FHIR.Quantity"/>
        <ns4:element name="width" elementType="FHIR.Quantity"/>
        <ns4:element name="depth" elementType="FHIR.Quantity"/>
        <ns4:element name="weight" elementType="FHIR.Quantity"/>
        <ns4:element name="nominalVolume" elementType="FHIR.Quantity"/>
        <ns4:element name="externalDiameter" elementType="FHIR.Quantity"/>
        <ns4:element name="shape" elementType="FHIR.string"/>
        <ns4:element name="color">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="imprint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="image">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="scoring" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ProductShelfLife" identifier="http://hl7.org/fhir/StructureDefinition/ProductShelfLife" label="ProductShelfLife" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Quantity"/>
        <ns4:element name="specialPrecautionsForStorage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PropertyRepresentation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PropertyType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Provenance" identifier="http://hl7.org/fhir/StructureDefinition/Provenance" label="Provenance" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="occurred">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recorded" elementType="FHIR.instant"/>
        <ns4:element name="policy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="activity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="agent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Agent"/>
        </ns4:element>
        <ns4:element name="entity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Entity"/>
        </ns4:element>
        <ns4:element name="signature">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Signature"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="who"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="who"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="who"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Provenance.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="role">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Provenance.Entity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.ProvenanceEntityRole"/>
        <ns4:element name="what" elementType="FHIR.Reference"/>
        <ns4:element name="agent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Provenance.Agent"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ProvenanceEntityRole" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="PublicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QualityType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Quantity" identifier="http://hl7.org/fhir/StructureDefinition/Quantity" label="Quantity" retrievable="false" primaryCodePath="code" baseType="FHIR.Element">
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="comparator" elementType="FHIR.QuantityComparator"/>
        <ns4:element name="unit" elementType="FHIR.string"/>
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="code" elementType="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QuantityComparator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Questionnaire" identifier="http://hl7.org/fhir/StructureDefinition/Questionnaire" label="Questionnaire" retrievable="true" primaryCodePath="name" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subjectType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Questionnaire.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.uri"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="prefix" elementType="FHIR.string"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.QuestionnaireItemType"/>
        <ns4:element name="enableWhen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item.EnableWhen"/>
        </ns4:element>
        <ns4:element name="enableBehavior" elementType="FHIR.EnableWhenBehavior"/>
        <ns4:element name="required" elementType="FHIR.boolean"/>
        <ns4:element name="repeats" elementType="FHIR.boolean"/>
        <ns4:element name="readOnly" elementType="FHIR.boolean"/>
        <ns4:element name="maxLength" elementType="FHIR.integer"/>
        <ns4:element name="answerValueSet" elementType="FHIR.canonical"/>
        <ns4:element name="answerOption">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item.AnswerOption"/>
        </ns4:element>
        <ns4:element name="initial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item.Initial"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Questionnaire.Item"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Questionnaire.Item.AnswerOption" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="initialSelected" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Questionnaire.Item.EnableWhen" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="question" elementType="FHIR.string"/>
        <ns4:element name="operator" elementType="FHIR.QuestionnaireItemOperator"/>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Questionnaire.Item.Initial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QuestionnaireItemOperator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QuestionnaireItemType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QuestionnaireResponse" identifier="http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse" label="QuestionnaireResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="questionnaire" elementType="FHIR.canonical"/>
        <ns4:element name="status" elementType="FHIR.QuestionnaireResponseStatus"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="authored" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="source"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="source"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QuestionnaireResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.uri"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item.Answer"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="QuestionnaireResponse.Item"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QuestionnaireResponse.Item.Answer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="QuestionnaireResponse.Item"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="QuestionnaireResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Range" identifier="http://hl7.org/fhir/StructureDefinition/Range" label="Range" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="low" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="high" elementType="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Ratio" identifier="http://hl7.org/fhir/StructureDefinition/Ratio" label="Ratio" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="numerator" elementType="FHIR.Quantity"/>
        <ns4:element name="denominator" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Reference" identifier="http://hl7.org/fhir/StructureDefinition/Reference" label="Reference" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="reference" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.uri"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="display" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ReferenceHandlingPolicy" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ReferenceVersionRules" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ReferredDocumentStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RelatedArtifact" identifier="http://hl7.org/fhir/StructureDefinition/RelatedArtifact" label="RelatedArtifact" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.RelatedArtifactType"/>
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="citation" elementType="FHIR.markdown"/>
        <ns4:element name="url" elementType="FHIR.url"/>
        <ns4:element name="document" elementType="FHIR.Attachment"/>
        <ns4:element name="resource" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RelatedArtifactType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RelatedPerson" identifier="http://hl7.org/fhir/StructureDefinition/RelatedPerson" label="RelatedPerson" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="relationship">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="photo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedPerson.Communication"/>
        </ns4:element>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RelatedPerson.Communication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RemittanceOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RepositoryType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RequestGroup" identifier="http://hl7.org/fhir/StructureDefinition/RequestGroup" label="RequestGroup" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.RequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Action"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="participant"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="author"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="participant"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="author"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="participant"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RequestGroup.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="prefix" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="textEquivalent" elementType="FHIR.string"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Action.Condition"/>
        </ns4:element>
        <ns4:element name="relatedAction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Action.RelatedAction"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="groupingBehavior" elementType="FHIR.ActionGroupingBehavior"/>
        <ns4:element name="selectionBehavior" elementType="FHIR.ActionSelectionBehavior"/>
        <ns4:element name="requiredBehavior" elementType="FHIR.ActionRequiredBehavior"/>
        <ns4:element name="precheckBehavior" elementType="FHIR.ActionPrecheckBehavior"/>
        <ns4:element name="cardinalityBehavior" elementType="FHIR.ActionCardinalityBehavior"/>
        <ns4:element name="resource" elementType="FHIR.Reference"/>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RequestGroup.Action"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RequestGroup.Action.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" elementType="FHIR.ActionConditionKind"/>
        <ns4:element name="expression" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RequestGroup.Action.RelatedAction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actionId" elementType="FHIR.id"/>
        <ns4:element name="relationship" elementType="FHIR.ActionRelationshipType"/>
        <ns4:element name="offset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RequestIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ResearchDefinition" label="ResearchDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="comment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="population" elementType="FHIR.Reference"/>
        <ns4:element name="exposure" elementType="FHIR.Reference"/>
        <ns4:element name="exposureAlternative" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchElementDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition" label="ResearchElementDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="comment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.ResearchElementType"/>
        <ns4:element name="variableType" elementType="FHIR.VariableType"/>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResearchElementDefinition.Characteristic"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchElementDefinition.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="usageContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="exclude" elementType="FHIR.boolean"/>
        <ns4:element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="studyEffectiveDescription" elementType="FHIR.string"/>
        <ns4:element name="studyEffective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="studyEffectiveTimeFromStart" elementType="FHIR.Duration"/>
        <ns4:element name="studyEffectiveGroupMeasure" elementType="FHIR.GroupMeasure"/>
        <ns4:element name="participantEffectiveDescription" elementType="FHIR.string"/>
        <ns4:element name="participantEffective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="participantEffectiveTimeFromStart" elementType="FHIR.Duration"/>
        <ns4:element name="participantEffectiveGroupMeasure" elementType="FHIR.GroupMeasure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchElementType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchStudy" identifier="http://hl7.org/fhir/StructureDefinition/ResearchStudy" label="ResearchStudy" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="protocol">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ResearchStudyStatus"/>
        <ns4:element name="primaryPurposeType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="phase" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="keyword">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="enrollment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="sponsor" elementType="FHIR.Reference"/>
        <ns4:element name="principalInvestigator" elementType="FHIR.Reference"/>
        <ns4:element name="site">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonStopped" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="arm">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResearchStudy.Arm"/>
        </ns4:element>
        <ns4:element name="objective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResearchStudy.Objective"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="principalInvestigator"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchStudy.Arm" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchStudy.Objective" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchStudyStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchSubject" identifier="http://hl7.org/fhir/StructureDefinition/ResearchSubject" label="ResearchSubject" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ResearchSubjectStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="study" elementType="FHIR.Reference"/>
        <ns4:element name="individual" elementType="FHIR.Reference"/>
        <ns4:element name="assignedArm" elementType="FHIR.string"/>
        <ns4:element name="actualArm" elementType="FHIR.string"/>
        <ns4:element name="consent" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="individual"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResearchSubjectStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Resource" identifier="http://hl7.org/fhir/StructureDefinition/Resource" label="Resource" retrievable="true" baseType="System.Any">
        <ns4:element name="id" elementType="FHIR.id"/>
        <ns4:element name="meta" elementType="FHIR.Meta"/>
        <ns4:element name="implicitRules" elementType="FHIR.uri"/>
        <ns4:element name="language" elementType="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResourceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResourceVersionPolicy" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ResponseType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RestfulCapabilityMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskAssessment" identifier="http://hl7.org/fhir/StructureDefinition/RiskAssessment" label="RiskAssessment" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn" elementType="FHIR.Reference"/>
        <ns4:element name="parent" elementType="FHIR.Reference"/>
        <ns4:element name="status" elementType="FHIR.RiskAssessmentStatus"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="condition" elementType="FHIR.Reference"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="prediction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskAssessment.Prediction"/>
        </ns4:element>
        <ns4:element name="mitigation" elementType="FHIR.string"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="performer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskAssessment.Prediction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="probability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="qualitativeRisk" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="relativeRisk" elementType="FHIR.decimal"/>
        <ns4:element name="when">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="rationale" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskAssessmentStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskEvidenceSynthesis" identifier="http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis" label="RiskEvidenceSynthesis" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="synthesisType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="studyType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population" elementType="FHIR.Reference"/>
        <ns4:element name="exposure" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.Reference"/>
        <ns4:element name="sampleSize" elementType="FHIR.RiskEvidenceSynthesis.SampleSize"/>
        <ns4:element name="riskEstimate" elementType="FHIR.RiskEvidenceSynthesis.RiskEstimate"/>
        <ns4:element name="certainty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskEvidenceSynthesis.Certainty"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskEvidenceSynthesis.Certainty" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="certaintySubcomponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskEvidenceSynthesis.Certainty.CertaintySubcomponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskEvidenceSynthesis.Certainty.CertaintySubcomponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskEvidenceSynthesis.RiskEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="denominatorCount" elementType="FHIR.integer"/>
        <ns4:element name="numeratorCount" elementType="FHIR.integer"/>
        <ns4:element name="precisionEstimate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskEvidenceSynthesis.RiskEstimate.PrecisionEstimate"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskEvidenceSynthesis.RiskEstimate.PrecisionEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="level" elementType="FHIR.decimal"/>
        <ns4:element name="from" elementType="FHIR.decimal"/>
        <ns4:element name="to" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="RiskEvidenceSynthesis.SampleSize" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="numberOfStudies" elementType="FHIR.integer"/>
        <ns4:element name="numberOfParticipants" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SPDXLicense" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SampledData" identifier="http://hl7.org/fhir/StructureDefinition/SampledData" label="SampledData" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="origin" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="period" elementType="FHIR.decimal"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="lowerLimit" elementType="FHIR.decimal"/>
        <ns4:element name="upperLimit" elementType="FHIR.decimal"/>
        <ns4:element name="dimensions" elementType="FHIR.positiveInt"/>
        <ns4:element name="data" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Schedule" identifier="http://hl7.org/fhir/StructureDefinition/Schedule" label="Schedule" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="serviceCategory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="planningHorizon" elementType="FHIR.Period"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="actor"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SearchComparator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SearchEntryMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SearchModifierCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SearchParamType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SearchParameter" identifier="http://hl7.org/fhir/StructureDefinition/SearchParameter" label="SearchParameter" retrievable="true" primaryCodePath="target" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="derivedFrom" elementType="FHIR.canonical"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="base">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.SearchParamType"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="xpath" elementType="FHIR.string"/>
        <ns4:element name="xpathUsage" elementType="FHIR.XPathUsageType"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceType"/>
        </ns4:element>
        <ns4:element name="multipleOr" elementType="FHIR.boolean"/>
        <ns4:element name="multipleAnd" elementType="FHIR.boolean"/>
        <ns4:element name="comparator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchComparator"/>
        </ns4:element>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchModifierCode"/>
        </ns4:element>
        <ns4:element name="chain">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchParameter.Component"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SearchParameter.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="definition" elementType="FHIR.canonical"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SectionMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SequenceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ServiceRequest" identifier="http://hl7.org/fhir/StructureDefinition/ServiceRequest" label="ServiceRequest" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="requisition" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.ServiceRequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.ServiceRequestIntent"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.ServiceRequestPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="orderDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="asNeeded">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performerType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="locationCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="locationReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="specimen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="patientInstruction" elementType="FHIR.string"/>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="performer"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="performer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ServiceRequestIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ServiceRequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ServiceRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Signature" identifier="http://hl7.org/fhir/StructureDefinition/Signature" label="Signature" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="when" elementType="FHIR.instant"/>
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
        <ns4:element name="targetFormat" elementType="FHIR.MimeType"/>
        <ns4:element name="sigFormat" elementType="FHIR.MimeType"/>
        <ns4:element name="data" elementType="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SimpleQuantity" identifier="http://hl7.org/fhir/StructureDefinition/SimpleQuantity" label="SimpleQuantity" retrievable="false" primaryCodePath="code" baseType="FHIR.Quantity">
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="unit" elementType="FHIR.string"/>
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="code" elementType="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SlicingRules" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Slot" identifier="http://hl7.org/fhir/StructureDefinition/Slot" label="Slot" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="serviceCategory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="schedule" elementType="FHIR.Reference"/>
        <ns4:element name="status" elementType="FHIR.SlotStatus"/>
        <ns4:element name="start" elementType="FHIR.instant"/>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="overbooked" elementType="FHIR.boolean"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SlotStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SortDirection" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Specimen" identifier="http://hl7.org/fhir/StructureDefinition/Specimen" label="Specimen" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="accessionIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.SpecimenStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="receivedTime" elementType="FHIR.dateTime"/>
        <ns4:element name="parent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="request">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="collection" elementType="FHIR.Specimen.Collection"/>
        <ns4:element name="processing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Specimen.Processing"/>
        </ns4:element>
        <ns4:element name="container">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Specimen.Container"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="collector"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="subject"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="subject"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Specimen.Collection" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="collector" elementType="FHIR.Reference"/>
        <ns4:element name="collected">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="duration" elementType="FHIR.Duration"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fastingStatus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Specimen.Container" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="capacity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="specimenQuantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Specimen.Processing" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="procedure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="time">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SpecimenContainedPreference" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SpecimenDefinition" identifier="http://hl7.org/fhir/StructureDefinition/SpecimenDefinition" label="SpecimenDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="typeCollected" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patientPreparation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="timeAspect" elementType="FHIR.string"/>
        <ns4:element name="collection">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="typeTested">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SpecimenDefinition.TypeTested"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SpecimenDefinition.TypeTested" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="isDerived" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preference" elementType="FHIR.SpecimenContainedPreference"/>
        <ns4:element name="container" elementType="FHIR.SpecimenDefinition.TypeTested.Container"/>
        <ns4:element name="requirement" elementType="FHIR.string"/>
        <ns4:element name="retentionTime" elementType="FHIR.Duration"/>
        <ns4:element name="rejectionCriterion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="handling">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SpecimenDefinition.TypeTested.Handling"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SpecimenDefinition.TypeTested.Container" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="material" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="cap" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="capacity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="minimumVolume">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SimpleQuantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SpecimenDefinition.TypeTested.Container.Additive"/>
        </ns4:element>
        <ns4:element name="preparation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SpecimenDefinition.TypeTested.Container.Additive" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SpecimenDefinition.TypeTested.Handling" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="temperatureQualifier" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="temperatureRange" elementType="FHIR.Range"/>
        <ns4:element name="maxDuration" elementType="FHIR.Duration"/>
        <ns4:element name="instruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SpecimenStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Status" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StrandType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureDefinition" identifier="http://hl7.org/fhir/StructureDefinition/StructureDefinition" label="StructureDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="keyword">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="fhirVersion" elementType="FHIR.FHIRVersion"/>
        <ns4:element name="mapping">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureDefinition.Mapping"/>
        </ns4:element>
        <ns4:element name="kind" elementType="FHIR.StructureDefinitionKind"/>
        <ns4:element name="abstract" elementType="FHIR.boolean"/>
        <ns4:element name="context">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureDefinition.Context"/>
        </ns4:element>
        <ns4:element name="contextInvariant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.uri"/>
        <ns4:element name="baseDefinition" elementType="FHIR.canonical"/>
        <ns4:element name="derivation" elementType="FHIR.TypeDerivationRule"/>
        <ns4:element name="snapshot" elementType="FHIR.StructureDefinition.Snapshot"/>
        <ns4:element name="differential" elementType="FHIR.StructureDefinition.Differential"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureDefinition.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ExtensionContextType"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureDefinition.Differential" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureDefinition.Mapping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identity" elementType="FHIR.id"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureDefinition.Snapshot" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureDefinitionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap" identifier="http://hl7.org/fhir/StructureDefinition/StructureMap" label="StructureMap" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="structure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Structure"/>
        </ns4:element>
        <ns4:element name="import">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="extends" elementType="FHIR.id"/>
        <ns4:element name="typeMode" elementType="FHIR.StructureMapGroupTypeMode"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
        <ns4:element name="input">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group.Input"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group.Rule"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Group.Input" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="mode" elementType="FHIR.StructureMapInputMode"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Group.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group.Rule.Source"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group.Rule.Target"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="StructureMap.Group.Rule"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dependent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group.Rule.Dependent"/>
        </ns4:element>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Group.Rule.Dependent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="variable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Group.Rule.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="context" elementType="FHIR.id"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="defaultValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="element" elementType="FHIR.string"/>
        <ns4:element name="listMode" elementType="FHIR.StructureMapSourceListMode"/>
        <ns4:element name="variable" elementType="FHIR.id"/>
        <ns4:element name="condition" elementType="FHIR.string"/>
        <ns4:element name="check" elementType="FHIR.string"/>
        <ns4:element name="logMessage" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Group.Rule.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="context" elementType="FHIR.id"/>
        <ns4:element name="contextType" elementType="FHIR.StructureMapContextType"/>
        <ns4:element name="element" elementType="FHIR.string"/>
        <ns4:element name="variable" elementType="FHIR.id"/>
        <ns4:element name="listMode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMapTargetListMode"/>
        </ns4:element>
        <ns4:element name="listRuleId" elementType="FHIR.id"/>
        <ns4:element name="transform" elementType="FHIR.StructureMapTransform"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group.Rule.Target.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Group.Rule.Target.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMap.Structure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="url" elementType="FHIR.canonical"/>
        <ns4:element name="mode" elementType="FHIR.StructureMapModelMode"/>
        <ns4:element name="alias" elementType="FHIR.string"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMapContextType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMapGroupTypeMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMapInputMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMapModelMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMapSourceListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMapTargetListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="StructureMapTransform" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Subscription" identifier="http://hl7.org/fhir/StructureDefinition/Subscription" label="Subscription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="status" elementType="FHIR.SubscriptionStatus"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="reason" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.string"/>
        <ns4:element name="error" elementType="FHIR.string"/>
        <ns4:element name="channel" elementType="FHIR.Subscription.Channel"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Subscription.Channel" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.SubscriptionChannelType"/>
        <ns4:element name="endpoint" elementType="FHIR.url"/>
        <ns4:element name="payload" elementType="FHIR.MimeType"/>
        <ns4:element name="header">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubscriptionChannelType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubscriptionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Substance" identifier="http://hl7.org/fhir/StructureDefinition/Substance" label="Substance" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FHIRSubstanceStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Substance.Instance"/>
        </ns4:element>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Substance.Ingredient"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Substance.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.Ratio"/>
        <ns4:element name="substance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Substance.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="expiry" elementType="FHIR.dateTime"/>
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceAmount" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceAmount" label="SubstanceAmount" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amountText" elementType="FHIR.string"/>
        <ns4:element name="referenceRange" elementType="FHIR.SubstanceAmount.ReferenceRange"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceAmount.ReferenceRange" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="lowLimit" elementType="FHIR.Quantity"/>
        <ns4:element name="highLimit" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceNucleicAcid" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid" label="SubstanceNucleicAcid" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="sequenceType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="numberOfSubunits" elementType="FHIR.integer"/>
        <ns4:element name="areaOfHybridisation" elementType="FHIR.string"/>
        <ns4:element name="oligoNucleotideType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subunit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceNucleicAcid.Subunit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceNucleicAcid.Subunit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="subunit" elementType="FHIR.integer"/>
        <ns4:element name="sequence" elementType="FHIR.string"/>
        <ns4:element name="length" elementType="FHIR.integer"/>
        <ns4:element name="sequenceAttachment" elementType="FHIR.Attachment"/>
        <ns4:element name="fivePrime" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="threePrime" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="linkage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceNucleicAcid.Subunit.Linkage"/>
        </ns4:element>
        <ns4:element name="sugar">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceNucleicAcid.Subunit.Sugar"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceNucleicAcid.Subunit.Linkage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="connectivity" elementType="FHIR.string"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="residueSite" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceNucleicAcid.Subunit.Sugar" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="residueSite" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstancePolymer" identifier="http://hl7.org/fhir/StructureDefinition/SubstancePolymer" label="SubstancePolymer" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="class" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="geometry" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="copolymerConnectivity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="modification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="monomerSet">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.MonomerSet"/>
        </ns4:element>
        <ns4:element name="repeat">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.Repeat"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstancePolymer.MonomerSet" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="ratioType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="startingMaterial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.MonomerSet.StartingMaterial"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstancePolymer.MonomerSet.StartingMaterial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="material" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="isDefining" elementType="FHIR.boolean"/>
        <ns4:element name="amount" elementType="FHIR.SubstanceAmount"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstancePolymer.Repeat" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="numberOfUnits" elementType="FHIR.integer"/>
        <ns4:element name="averageMolecularFormula" elementType="FHIR.string"/>
        <ns4:element name="repeatUnitAmountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="repeatUnit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.Repeat.RepeatUnit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstancePolymer.Repeat.RepeatUnit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="orientationOfPolymerisation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="repeatUnit" elementType="FHIR.string"/>
        <ns4:element name="amount" elementType="FHIR.SubstanceAmount"/>
        <ns4:element name="degreeOfPolymerisation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation"/>
        </ns4:element>
        <ns4:element name="structuralRepresentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="degree" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.SubstanceAmount"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="representation" elementType="FHIR.string"/>
        <ns4:element name="attachment" elementType="FHIR.Attachment"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceProtein" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceProtein" label="SubstanceProtein" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="sequenceType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="numberOfSubunits" elementType="FHIR.integer"/>
        <ns4:element name="disulfideLinkage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="subunit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceProtein.Subunit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceProtein.Subunit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="subunit" elementType="FHIR.integer"/>
        <ns4:element name="sequence" elementType="FHIR.string"/>
        <ns4:element name="length" elementType="FHIR.integer"/>
        <ns4:element name="sequenceAttachment" elementType="FHIR.Attachment"/>
        <ns4:element name="nTerminalModificationId" elementType="FHIR.Identifier"/>
        <ns4:element name="nTerminalModification" elementType="FHIR.string"/>
        <ns4:element name="cTerminalModificationId" elementType="FHIR.Identifier"/>
        <ns4:element name="cTerminalModification" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceReferenceInformation" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation" label="SubstanceReferenceInformation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="gene">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.Gene"/>
        </ns4:element>
        <ns4:element name="geneElement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.GeneElement"/>
        </ns4:element>
        <ns4:element name="classification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.Classification"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceReferenceInformation.Classification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="domain" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="classification" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subtype">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceReferenceInformation.Gene" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="geneSequenceOrigin" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="gene" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceReferenceInformation.GeneElement" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="element" elementType="FHIR.Identifier"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceReferenceInformation.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="target" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="interaction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="organism" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="organismType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSourceMaterial" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial" label="SubstanceSourceMaterial" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="sourceMaterialClass" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sourceMaterialType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sourceMaterialState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="organismId" elementType="FHIR.Identifier"/>
        <ns4:element name="organismName" elementType="FHIR.string"/>
        <ns4:element name="parentSubstanceId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="parentSubstanceName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="countryOfOrigin">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="geographicalLocation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="developmentStage" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fractionDescription">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSourceMaterial.FractionDescription"/>
        </ns4:element>
        <ns4:element name="organism" elementType="FHIR.SubstanceSourceMaterial.Organism"/>
        <ns4:element name="partDescription">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSourceMaterial.PartDescription"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSourceMaterial.FractionDescription" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="fraction" elementType="FHIR.string"/>
        <ns4:element name="materialType" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSourceMaterial.Organism" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="family" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="genus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="species" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intraspecificType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intraspecificDescription" elementType="FHIR.string"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSourceMaterial.Organism.Author"/>
        </ns4:element>
        <ns4:element name="hybrid" elementType="FHIR.SubstanceSourceMaterial.Organism.Hybrid"/>
        <ns4:element name="organismGeneral" elementType="FHIR.SubstanceSourceMaterial.Organism.OrganismGeneral"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSourceMaterial.Organism.Author" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="authorType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="authorDescription" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSourceMaterial.Organism.Hybrid" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="maternalOrganismId" elementType="FHIR.string"/>
        <ns4:element name="maternalOrganismName" elementType="FHIR.string"/>
        <ns4:element name="paternalOrganismId" elementType="FHIR.string"/>
        <ns4:element name="paternalOrganismName" elementType="FHIR.string"/>
        <ns4:element name="hybridType" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSourceMaterial.Organism.OrganismGeneral" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kingdom" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="phylum" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="class" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="order" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSourceMaterial.PartDescription" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="part" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="partLocation" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceSpecification" label="SubstanceSpecification" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="domain" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="moiety">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Moiety"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Property"/>
        </ns4:element>
        <ns4:element name="referenceInformation" elementType="FHIR.Reference"/>
        <ns4:element name="structure" elementType="FHIR.SubstanceSpecification.Structure"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Code"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Name"/>
        </ns4:element>
        <ns4:element name="molecularWeight">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SubstanceSpecification.Structure.Isotope.MolecularWeight"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="relationship">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Relationship"/>
        </ns4:element>
        <ns4:element name="nucleicAcid" elementType="FHIR.Reference"/>
        <ns4:element name="polymer" elementType="FHIR.Reference"/>
        <ns4:element name="protein" elementType="FHIR.Reference"/>
        <ns4:element name="sourceMaterial" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Code" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="statusDate" elementType="FHIR.dateTime"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Moiety" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="stereochemistry" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="opticalActivity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="molecularFormula" elementType="FHIR.string"/>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Name" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
        <ns4:element name="language">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="domain">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="synonym">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SubstanceSpecification.Name"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="translation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SubstanceSpecification.Name"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="official">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Name.Official"/>
        </ns4:element>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Name.Official" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="authority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="parameters" elementType="FHIR.string"/>
        <ns4:element name="definingSubstance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Relationship" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="isDefining" elementType="FHIR.boolean"/>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amountRatioLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="amountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Structure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="stereochemistry" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="opticalActivity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="molecularFormula" elementType="FHIR.string"/>
        <ns4:element name="molecularFormulaByMoiety" elementType="FHIR.string"/>
        <ns4:element name="isotope">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Structure.Isotope"/>
        </ns4:element>
        <ns4:element name="molecularWeight" elementType="FHIR.SubstanceSpecification.Structure.Isotope.MolecularWeight"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="representation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Structure.Representation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Structure.Isotope" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="substitution" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="halfLife" elementType="FHIR.Quantity"/>
        <ns4:element name="molecularWeight" elementType="FHIR.SubstanceSpecification.Structure.Isotope.MolecularWeight"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Structure.Isotope.MolecularWeight" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SubstanceSpecification.Structure.Representation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="representation" elementType="FHIR.string"/>
        <ns4:element name="attachment" elementType="FHIR.Attachment"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SupplyDelivery" identifier="http://hl7.org/fhir/StructureDefinition/SupplyDelivery" label="SupplyDelivery" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.SupplyDeliveryStatus"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="suppliedItem" elementType="FHIR.SupplyDelivery.SuppliedItem"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="supplier" elementType="FHIR.Reference"/>
        <ns4:element name="destination" elementType="FHIR.Reference"/>
        <ns4:element name="receiver">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="supplier"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="receiver"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SupplyDelivery.SuppliedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SupplyDeliveryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SupplyRequest" identifier="http://hl7.org/fhir/StructureDefinition/SupplyRequest" label="SupplyRequest" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.SupplyRequestStatus"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SupplyRequest.Parameter"/>
        </ns4:element>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="supplier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="deliverFrom" elementType="FHIR.Reference"/>
        <ns4:element name="deliverTo" elementType="FHIR.Reference"/>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="deliverTo"/>
        <ns4:contextRelationship context="Device" relatedKeyElement="requester"/>
        <ns4:contextRelationship context="RelatedPerson" relatedKeyElement="requester"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SupplyRequest.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SupplyRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="SystemRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Task" identifier="http://hl7.org/fhir/StructureDefinition/Task" label="Task" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical" elementType="FHIR.canonical"/>
        <ns4:element name="instantiatesUri" elementType="FHIR.uri"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.TaskStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="businessStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intent" elementType="FHIR.TaskIntent"/>
        <ns4:element name="priority" elementType="FHIR.TaskPriority"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="focus" elementType="FHIR.Reference"/>
        <ns4:element name="for" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="executionPeriod" elementType="FHIR.Period"/>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="lastModified" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performerType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" elementType="FHIR.Reference"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="restriction" elementType="FHIR.Task.Restriction"/>
        <ns4:element name="input">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Task.Input"/>
        </ns4:element>
        <ns4:element name="output">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Task.Output"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Task.Input" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Task.Output" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Meta"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Task.Restriction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="repetitions" elementType="FHIR.positiveInt"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TaskIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TaskPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TaskStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities" identifier="http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities" label="TerminologyCapabilities" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="kind" elementType="FHIR.CapabilityStatementKind"/>
        <ns4:element name="software" elementType="FHIR.TerminologyCapabilities.Software"/>
        <ns4:element name="implementation" elementType="FHIR.TerminologyCapabilities.Implementation"/>
        <ns4:element name="lockedDate" elementType="FHIR.boolean"/>
        <ns4:element name="codeSystem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.CodeSystem"/>
        </ns4:element>
        <ns4:element name="expansion" elementType="FHIR.TerminologyCapabilities.Expansion"/>
        <ns4:element name="codeSearch" elementType="FHIR.CodeSearchSupport"/>
        <ns4:element name="validateCode" elementType="FHIR.TerminologyCapabilities.ValidateCode"/>
        <ns4:element name="translation" elementType="FHIR.TerminologyCapabilities.Translation"/>
        <ns4:element name="closure" elementType="FHIR.TerminologyCapabilities.Closure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.Closure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="translation" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.CodeSystem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uri" elementType="FHIR.canonical"/>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.CodeSystem.Version"/>
        </ns4:element>
        <ns4:element name="subsumption" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.CodeSystem.Version" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.string"/>
        <ns4:element name="isDefault" elementType="FHIR.boolean"/>
        <ns4:element name="compositional" elementType="FHIR.boolean"/>
        <ns4:element name="language">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="filter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.CodeSystem.Version.Filter"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.CodeSystem.Version.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="op">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.Expansion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="hierarchical" elementType="FHIR.boolean"/>
        <ns4:element name="paging" elementType="FHIR.boolean"/>
        <ns4:element name="incomplete" elementType="FHIR.boolean"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.Expansion.Parameter"/>
        </ns4:element>
        <ns4:element name="textFilter" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.Expansion.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.code"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.Implementation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.Software" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.Translation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="needsMap" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TerminologyCapabilities.ValidateCode" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="translations" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport" identifier="http://hl7.org/fhir/StructureDefinition/TestReport" label="TestReport" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.TestReportStatus"/>
        <ns4:element name="testScript" elementType="FHIR.Reference"/>
        <ns4:element name="result" elementType="FHIR.TestReportResult"/>
        <ns4:element name="score" elementType="FHIR.decimal"/>
        <ns4:element name="tester" elementType="FHIR.string"/>
        <ns4:element name="issued" elementType="FHIR.dateTime"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Participant"/>
        </ns4:element>
        <ns4:element name="setup" elementType="FHIR.TestReport.Setup"/>
        <ns4:element name="test">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Test"/>
        </ns4:element>
        <ns4:element name="teardown" elementType="FHIR.TestReport.Teardown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.TestReportParticipantType"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
        <ns4:element name="display" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Setup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Setup.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Setup.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestReport.Setup.Action.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestReport.Setup.Action.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Setup.Action.Assert" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="result" elementType="FHIR.TestReportActionResult"/>
        <ns4:element name="message" elementType="FHIR.markdown"/>
        <ns4:element name="detail" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Setup.Action.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="result" elementType="FHIR.TestReportActionResult"/>
        <ns4:element name="message" elementType="FHIR.markdown"/>
        <ns4:element name="detail" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Teardown" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Teardown.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Teardown.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestReport.Setup.Action.Operation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Test" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Test.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReport.Test.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestReport.Setup.Action.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestReport.Setup.Action.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReportActionResult" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReportParticipantType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReportResult" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript" identifier="http://hl7.org/fhir/StructureDefinition/TestScript" label="TestScript" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="origin">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Origin"/>
        </ns4:element>
        <ns4:element name="destination">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Destination"/>
        </ns4:element>
        <ns4:element name="metadata" elementType="FHIR.TestScript.Metadata"/>
        <ns4:element name="fixture">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Fixture"/>
        </ns4:element>
        <ns4:element name="profile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="variable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Variable"/>
        </ns4:element>
        <ns4:element name="setup" elementType="FHIR.TestScript.Setup"/>
        <ns4:element name="test">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Test"/>
        </ns4:element>
        <ns4:element name="teardown" elementType="FHIR.TestScript.Teardown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Destination" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="index" elementType="FHIR.integer"/>
        <ns4:element name="profile" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Fixture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="autocreate" elementType="FHIR.boolean"/>
        <ns4:element name="autodelete" elementType="FHIR.boolean"/>
        <ns4:element name="resource" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Metadata" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Metadata.Link"/>
        </ns4:element>
        <ns4:element name="capability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Metadata.Capability"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Metadata.Capability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="required" elementType="FHIR.boolean"/>
        <ns4:element name="validated" elementType="FHIR.boolean"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="origin">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="destination" elementType="FHIR.integer"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="capabilities" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Metadata.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Origin" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="index" elementType="FHIR.integer"/>
        <ns4:element name="profile" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Setup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Setup.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Setup.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestScript.Setup.Action.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestScript.Setup.Action.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Setup.Action.Assert" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="direction" elementType="FHIR.AssertionDirectionType"/>
        <ns4:element name="compareToSourceId" elementType="FHIR.string"/>
        <ns4:element name="compareToSourceExpression" elementType="FHIR.string"/>
        <ns4:element name="compareToSourcePath" elementType="FHIR.string"/>
        <ns4:element name="contentType" elementType="FHIR.MimeType"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="headerField" elementType="FHIR.string"/>
        <ns4:element name="minimumId" elementType="FHIR.string"/>
        <ns4:element name="navigationLinks" elementType="FHIR.boolean"/>
        <ns4:element name="operator" elementType="FHIR.AssertionOperatorType"/>
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="requestMethod" elementType="FHIR.TestScriptRequestMethodCode"/>
        <ns4:element name="requestURL" elementType="FHIR.string"/>
        <ns4:element name="resource" elementType="FHIR.FHIRDefinedType"/>
        <ns4:element name="response" elementType="FHIR.AssertionResponseTypes"/>
        <ns4:element name="responseCode" elementType="FHIR.string"/>
        <ns4:element name="sourceId" elementType="FHIR.id"/>
        <ns4:element name="validateProfileId" elementType="FHIR.id"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="warningOnly" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Setup.Action.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="resource" elementType="FHIR.FHIRDefinedType"/>
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="accept" elementType="FHIR.MimeType"/>
        <ns4:element name="contentType" elementType="FHIR.MimeType"/>
        <ns4:element name="destination" elementType="FHIR.integer"/>
        <ns4:element name="encodeRequestUrl" elementType="FHIR.boolean"/>
        <ns4:element name="method" elementType="FHIR.TestScriptRequestMethodCode"/>
        <ns4:element name="origin" elementType="FHIR.integer"/>
        <ns4:element name="params" elementType="FHIR.string"/>
        <ns4:element name="requestHeader">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Setup.Action.Operation.RequestHeader"/>
        </ns4:element>
        <ns4:element name="requestId" elementType="FHIR.id"/>
        <ns4:element name="responseId" elementType="FHIR.id"/>
        <ns4:element name="sourceId" elementType="FHIR.id"/>
        <ns4:element name="targetId" elementType="FHIR.id"/>
        <ns4:element name="url" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Setup.Action.Operation.RequestHeader" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="field" elementType="FHIR.string"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Teardown" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Teardown.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Teardown.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestScript.Setup.Action.Operation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Test" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Test.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Test.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestScript.Setup.Action.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestScript.Setup.Action.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScript.Variable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="defaultValue" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="headerField" elementType="FHIR.string"/>
        <ns4:element name="hint" elementType="FHIR.string"/>
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="sourceId" elementType="FHIR.id"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TestScriptRequestMethodCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Timing" identifier="http://hl7.org/fhir/StructureDefinition/Timing" label="Timing" retrievable="false" primaryCodePath="code" baseType="FHIR.BackboneElement">
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.dateTime"/>
        </ns4:element>
        <ns4:element name="repeat" elementType="FHIR.Timing.Repeat"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Timing.Repeat" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="bounds">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="count" elementType="FHIR.positiveInt"/>
        <ns4:element name="countMax" elementType="FHIR.positiveInt"/>
        <ns4:element name="duration" elementType="FHIR.decimal"/>
        <ns4:element name="durationMax" elementType="FHIR.decimal"/>
        <ns4:element name="durationUnit" elementType="FHIR.UnitsOfTime"/>
        <ns4:element name="frequency" elementType="FHIR.positiveInt"/>
        <ns4:element name="frequencyMax" elementType="FHIR.positiveInt"/>
        <ns4:element name="period" elementType="FHIR.decimal"/>
        <ns4:element name="periodMax" elementType="FHIR.decimal"/>
        <ns4:element name="periodUnit" elementType="FHIR.UnitsOfTime"/>
        <ns4:element name="dayOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DayOfWeek"/>
        </ns4:element>
        <ns4:element name="timeOfDay">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.time"/>
        </ns4:element>
        <ns4:element name="when">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EventTiming"/>
        </ns4:element>
        <ns4:element name="offset" elementType="FHIR.unsignedInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TriggerDefinition" identifier="http://hl7.org/fhir/StructureDefinition/TriggerDefinition" label="TriggerDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.TriggerType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="data">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="condition" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TriggerType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TypeDerivationRule" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="TypeRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="UDIEntryType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="UnitsOfTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="UsageContext" identifier="http://hl7.org/fhir/StructureDefinition/UsageContext" label="UsageContext" retrievable="false" primaryCodePath="code" baseType="FHIR.Element">
        <ns4:element name="code" elementType="FHIR.Coding"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="Use" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet" identifier="http://hl7.org/fhir/StructureDefinition/ValueSet" label="ValueSet" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="immutable" elementType="FHIR.boolean"/>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="compose" elementType="FHIR.ValueSet.Compose"/>
        <ns4:element name="expansion" elementType="FHIR.ValueSet.Expansion"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Compose" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lockedDate" elementType="FHIR.date"/>
        <ns4:element name="inactive" elementType="FHIR.boolean"/>
        <ns4:element name="include">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Compose.Include"/>
        </ns4:element>
        <ns4:element name="exclude">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ValueSet.Compose.Include"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Compose.Include" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="concept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Compose.Include.Concept"/>
        </ns4:element>
        <ns4:element name="filter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Compose.Include.Filter"/>
        </ns4:element>
        <ns4:element name="valueSet">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Compose.Include.Concept" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Compose.Include.Concept.Designation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Compose.Include.Concept.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.Coding"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Compose.Include.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="property" elementType="FHIR.code"/>
        <ns4:element name="op" elementType="FHIR.FilterOperator"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Expansion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.uri"/>
        <ns4:element name="timestamp" elementType="FHIR.dateTime"/>
        <ns4:element name="total" elementType="FHIR.integer"/>
        <ns4:element name="offset" elementType="FHIR.integer"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Expansion.Parameter"/>
        </ns4:element>
        <ns4:element name="contains">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Expansion.Contains"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Expansion.Contains" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="abstract" elementType="FHIR.boolean"/>
        <ns4:element name="inactive" elementType="FHIR.boolean"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ValueSet.Compose.Include.Concept.Designation"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="contains">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier">
                <ns4:elementTypeSpecifier xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ValueSet.Expansion.Contains"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="ValueSet.Expansion.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VariableType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VerificationResult" identifier="http://hl7.org/fhir/StructureDefinition/VerificationResult" label="VerificationResult" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="targetLocation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="need" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.Status"/>
        <ns4:element name="statusDate" elementType="FHIR.dateTime"/>
        <ns4:element name="validationType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="validationProcess">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="frequency" elementType="FHIR.Timing"/>
        <ns4:element name="lastPerformed" elementType="FHIR.dateTime"/>
        <ns4:element name="nextScheduled" elementType="FHIR.date"/>
        <ns4:element name="failureAction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="primarySource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VerificationResult.PrimarySource"/>
        </ns4:element>
        <ns4:element name="attestation" elementType="FHIR.VerificationResult.Attestation"/>
        <ns4:element name="validator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VerificationResult.Validator"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VerificationResult.Attestation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
        <ns4:element name="communicationMethod" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="sourceIdentityCertificate" elementType="FHIR.string"/>
        <ns4:element name="proxyIdentityCertificate" elementType="FHIR.string"/>
        <ns4:element name="proxySignature" elementType="FHIR.Signature"/>
        <ns4:element name="sourceSignature" elementType="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VerificationResult.PrimarySource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="communicationMethod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="validationStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="validationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="canPushUpdates" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="pushTypeAvailable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VerificationResult.Validator" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="identityCertificate" elementType="FHIR.string"/>
        <ns4:element name="attestationSignature" elementType="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VisionBase" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VisionEyes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VisionPrescription" identifier="http://hl7.org/fhir/StructureDefinition/VisionPrescription" label="VisionPrescription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.VisionStatus"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="dateWritten" elementType="FHIR.dateTime"/>
        <ns4:element name="prescriber" elementType="FHIR.Reference"/>
        <ns4:element name="lensSpecification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VisionPrescription.LensSpecification"/>
        </ns4:element>
        <ns4:contextRelationship context="Practitioner" relatedKeyElement="prescriber"/>
        <ns4:contextRelationship context="Patient" relatedKeyElement="patient"/>
        <ns4:contextRelationship context="Encounter" relatedKeyElement="encounter"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VisionPrescription.LensSpecification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="product" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="eye" elementType="FHIR.VisionEyes"/>
        <ns4:element name="sphere" elementType="FHIR.decimal"/>
        <ns4:element name="cylinder" elementType="FHIR.decimal"/>
        <ns4:element name="axis" elementType="FHIR.integer"/>
        <ns4:element name="prism">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VisionPrescription.LensSpecification.Prism"/>
        </ns4:element>
        <ns4:element name="add" elementType="FHIR.decimal"/>
        <ns4:element name="power" elementType="FHIR.decimal"/>
        <ns4:element name="backCurve" elementType="FHIR.decimal"/>
        <ns4:element name="diameter" elementType="FHIR.decimal"/>
        <ns4:element name="duration" elementType="FHIR.SimpleQuantity"/>
        <ns4:element name="color" elementType="FHIR.string"/>
        <ns4:element name="brand" elementType="FHIR.string"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VisionPrescription.LensSpecification.Prism" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="amount" elementType="FHIR.decimal"/>
        <ns4:element name="base" elementType="FHIR.VisionBase"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="VisionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="XPathUsageType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="allowedUnits" identifier="http://hl7.org/fhir/StructureDefinition/elementdefinition-allowedUnits" label="allowedUnits" retrievable="false" baseType="System.Any">
        <ns4:baseTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
            <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
        </ns4:baseTypeSpecifier>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="base64Binary" identifier="http://hl7.org/fhir/StructureDefinition/base64Binary" label="base64Binary" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="boolean" identifier="http://hl7.org/fhir/StructureDefinition/boolean" label="boolean" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="canonical" identifier="http://hl7.org/fhir/StructureDefinition/canonical" label="canonical" retrievable="false" baseType="FHIR.uri"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="code" identifier="http://hl7.org/fhir/StructureDefinition/code" label="code" retrievable="false" baseType="FHIR.string"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="date" identifier="http://hl7.org/fhir/StructureDefinition/date" label="date" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Date"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="dateTime" identifier="http://hl7.org/fhir/StructureDefinition/dateTime" label="dateTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="decimal" identifier="http://hl7.org/fhir/StructureDefinition/decimal" label="decimal" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="id" identifier="http://hl7.org/fhir/StructureDefinition/id" label="id" retrievable="false" baseType="FHIR.string"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="instant" identifier="http://hl7.org/fhir/StructureDefinition/instant" label="instant" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="integer" identifier="http://hl7.org/fhir/StructureDefinition/integer" label="integer" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="markdown" identifier="http://hl7.org/fhir/StructureDefinition/markdown" label="markdown" retrievable="false" baseType="FHIR.string"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="oid" identifier="http://hl7.org/fhir/StructureDefinition/oid" label="oid" retrievable="false" baseType="FHIR.uri"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="positiveInt" identifier="http://hl7.org/fhir/StructureDefinition/positiveInt" label="positiveInt" retrievable="false" baseType="FHIR.integer"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="string" identifier="http://hl7.org/fhir/StructureDefinition/string" label="string" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="time" identifier="http://hl7.org/fhir/StructureDefinition/time" label="time" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="unsignedInt" identifier="http://hl7.org/fhir/StructureDefinition/unsignedInt" label="unsignedInt" retrievable="false" baseType="FHIR.integer"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="uri" identifier="http://hl7.org/fhir/StructureDefinition/uri" label="uri" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="url" identifier="http://hl7.org/fhir/StructureDefinition/url" label="url" retrievable="false" baseType="FHIR.uri"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="uuid" identifier="http://hl7.org/fhir/StructureDefinition/uuid" label="uuid" retrievable="false" baseType="FHIR.uri"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" namespace="FHIR" name="xhtml" identifier="http://hl7.org/fhir/StructureDefinition/xhtml" label="xhtml" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:conversionInfo functionName="FHIRHelpers.ToCode" fromType="FHIR.Coding" toType="System.Code"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToConcept" fromType="FHIR.CodeableConcept" toType="System.Concept"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.Quantity" toType="System.Quantity"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.SimpleQuantity" toType="System.Quantity"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.Age" toType="System.Quantity"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.Distance" toType="System.Quantity"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.Duration" toType="System.Quantity"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.Count" toType="System.Quantity"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.MoneyQuantity" toType="System.Quantity"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToRatio" fromType="FHIR.Ratio" toType="System.Ratio"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToInterval" fromType="FHIR.Period" toType="Interval&lt;System.DateTime&gt;"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToInterval" fromType="FHIR.Range" toType="Interval&lt;System.Quantity&gt;"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EnrollmentRequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestScriptRequestMethodCode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SortDirection" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BiologicallyDerivedProductStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.UnitsOfTime" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AddressType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceCategory" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IssueSeverity" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CareTeamStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureDefinitionKind" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EncounterStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PublicationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRVersion" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanActivityKind" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapSourceListMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuestionnaireResponseStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchComparator" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ChargeItemStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.xhtml" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionParticipantType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.InvoiceStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanActivityStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParticipationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceNameType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AssertionOperatorType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DaysOfWeek" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IssueType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapContextType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FamilyHistoryStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExtensionContextType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CommunicationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AssertionResponseTypes" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RequestIntent" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EnrollmentResponseStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.string" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionRequiredBehavior" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GraphCompartmentUse" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AccountStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationDispenseStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParameterUse" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ClaimStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IdentifierUse" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapTargetListMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExposureState" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportParticipantType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BindingStrength" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RequestPriority" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MimeType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QualityType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParticipantRequired" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.XPathUsageType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CoverageStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FilterOperator" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NamingSystemType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResearchSubjectStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapTransform" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResponseType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToDecimal" fromType="FHIR.decimal" toType="System.Decimal"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AggregationMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SystemRestfulInteraction" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.Messageheader_Response_Request" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NutritiionOrderIntent" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationKnowledgeStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AdverseEventActuality" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SubscriptionChannelType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActivityDefinitionKind" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AssertionDirectionType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanIntent" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConsentState" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceCriticality" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationRequestPriority" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PropertyRepresentation" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TriggerType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompositionStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AppointmentStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MessageSignificanceCategory" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ListMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResearchElementType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TaskPriority" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ObservationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PaymentNoticeStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResourceType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PaymentReconciliationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToBoolean" fromType="FHIR.boolean" toType="System.Boolean"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapGroupTypeMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.OrientationType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SupplyRequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EncounterLocationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CommunicationPriority" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConditionalDeleteStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContractPublicationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NutritionOrderStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ImmunizationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.uri" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.Use" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IdentityAssuranceLevel" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricColor" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToTime" fromType="FHIR.time" toType="System.Time"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConditionalReadStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceSeverity" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.OperationKind" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SubscriptionStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GoalLifecycleStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ObservationDataType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentReferenceStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LocationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SectionMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NoteType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CodeSystemContentMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRDeviceStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContactPointSystem" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SlotStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PropertyType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceRequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TypeDerivationRule" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GuidanceResponseStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RelatedArtifactType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SequenceType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ReferredDocumentStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MediaStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompartmentType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.InvoicePriceComponentType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricCalibrationState" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GroupType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EnableWhenBehavior" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TaskIntent" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ImmunizationEvaluationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToDate" fromType="FHIR.date" toType="System.Date"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExampleScenarioActorType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ProvenanceEntityRole" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityRequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SpecimenStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CurrencyCode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RestfulCapabilityMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DetectedIssueSeverity" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VisionEyes" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VisionStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConsentDataMeaning" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GuidePageGeneration" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentRelationshipType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ClaimResponseStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VariableType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RepositoryType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportResult" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConceptMapGroupUnmappedMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToDateTime" fromType="FHIR.instant" toType="System.DateTime"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ClinicalImpressionStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityResponsePurpose" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NarrativeStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ImagingStudyStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EndpointStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BiologicallyDerivedProductCategory" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationRequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResourceVersionPolicy" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToDateTime" fromType="FHIR.dateTime" toType="System.DateTime"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationAdministrationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionCardinalityBehavior" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationRequestIntent" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GroupMeasure" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NamingSystemIdentifierType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRResourceType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RiskAssessmentStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompartmentCode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DiscriminatorType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapInputMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LinkageType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ReferenceHandlingPolicy" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResearchStudyStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRDefinedType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AuditEventOutcome" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SpecimenContainedPreference" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionRelationshipType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConstraintSeverity" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ProcedureStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EventCapabilityMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CodeSearchSupport" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ObservationRangeCategory" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.UDIEntryType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricCategory" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportActionResult" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ChargeItemDefinitionPriceComponentType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CapabilityStatementKind" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActivityParticipantType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EventTiming" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchParamType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionGroupingBehavior" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapModelMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TaskStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ServiceRequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BiologicallyDerivedProductStorageScale" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GraphCompartmentRule" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ServiceRequestIntent" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SlicingRules" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExplanationOfBenefitStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GuideParameterCode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CatalogEntryRelationType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LinkType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRAllTypes" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConceptMapEquivalence" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AuditEventAction" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityResponseStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchModifierCode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.OperationParameterUse" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConsentProvisionType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionConditionKind" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParticipantStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AdministrativeGender" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuestionnaireItemType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricCalibrationType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EvidenceVariableType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionSelectionBehavior" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SupplyDeliveryStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DiagnosticReportStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FlagStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SPDXLicense" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ListStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.base64Binary" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceUseStatementStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AuditEventAgentNetworkType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AddressUse" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContactPointUse" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricOperationalStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContributorType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ReferenceVersionRules" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DetectedIssueStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MeasureReportStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchEntryMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NameUse" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CommunicationRequestStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LocationMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToInteger" fromType="FHIR.integer" toType="System.Integer"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRSubstanceStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuestionnaireItemOperator" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.HTTPVerb" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EpisodeOfCareStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RemittanceOutcome" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StrandType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.Status" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationStatementStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityRequestPurpose" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ServiceRequestPriority" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuantityComparator" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MeasureReportType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionPrecheckBehavior" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DayOfWeek" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompositionAttestationMode" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TypeRestfulInteraction" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContractStatus" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CodeSystemHierarchyMeaning" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VisionBase" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BundleType" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentConfidentiality" toType="System.String"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.id" toType="System.String"/>
    <ns4:contextInfo name="Practitioner" keyElement="id">
        <ns4:contextType modelName="FHIR" name="Practitioner"/>
    </ns4:contextInfo>
    <ns4:contextInfo name="Device" keyElement="id">
        <ns4:contextType modelName="FHIR" name="Device"/>
    </ns4:contextInfo>
    <ns4:contextInfo name="Patient" keyElement="id" birthDateElement="birthDate.value">
        <ns4:contextType modelName="FHIR" name="Patient"/>
    </ns4:contextInfo>
    <ns4:contextInfo name="Encounter" keyElement="id">
        <ns4:contextType modelName="FHIR" name="Encounter"/>
    </ns4:contextInfo>
    <ns4:contextInfo name="RelatedPerson" keyElement="id">
        <ns4:contextType modelName="FHIR" name="RelatedPerson"/>
    </ns4:contextInfo>
</ns4:modelInfo>
`;