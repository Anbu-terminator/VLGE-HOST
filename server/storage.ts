import { type User, type InsertUser, type StudentVerification, type InsertStudentVerification, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";
import { MongoClient, Db, Collection } from "mongodb";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getStudentVerification(certificateNumber: string): Promise<StudentVerification | undefined>;
  createStudentVerification(verification: InsertStudentVerification): Promise<StudentVerification>;  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private studentVerifications: Map<string, StudentVerification>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.studentVerifications = new Map();
    this.contactSubmissions = new Map();
    
    // Initialize with some sample student verification data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleVerifications: StudentVerification[] = [
      {
        id: randomUUID(),
        certificateNumber: "VLGE2024001",
        studentName: "Rajesh Kumar",
        registrationNumber: "REG2024001",
        college: "SRM Institute of Science and Technology",
        dateOfJoining: "01/01/2024",
        dateOfIssue: "31/03/2024",
        domain: "Full Stack Development",
        status: "Completed",
        grade: "A+",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        certificateNumber: "VLGE2024002",
        studentName: "Priya Sharma",
        registrationNumber: "REG2024002",
        college: "VIT University",
        dateOfJoining: "15/01/2024",
        dateOfIssue: "15/04/2024",
        domain: "Python Programming",
        status: "Completed",
        grade: "A",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        certificateNumber: "VLGE2024003",
        studentName: "Arjun Reddy",
        registrationNumber: "REG2024003",
        college: "Anna University",
        dateOfJoining: "01/02/2024",
        dateOfIssue: "30/04/2024",
        domain: "Machine Learning",
        status: "Completed",
        grade: "A+",
        createdAt: new Date(),
      }
    ];

    sampleVerifications.forEach(verification => {
      this.studentVerifications.set(verification.certificateNumber, verification);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getStudentVerification(certificateNumber: string): Promise<StudentVerification | undefined> {
    return this.studentVerifications.get(certificateNumber);
  }

  async createStudentVerification(insertVerification: InsertStudentVerification): Promise<StudentVerification> {
    const id = randomUUID();
    const verification: StudentVerification = { 
      ...insertVerification, 
      id,
      createdAt: new Date()
    };
    this.studentVerifications.set(verification.certificateNumber, verification);
    return verification;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      phone: insertSubmission.phone || null,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

// MongoDB Storage Implementation
export class MongoStorage implements IStorage {
  private client: MongoClient;
  private db: Db;
  private studentVerifications: Collection;

  constructor() {
    const uri = "mongodb+srv://bastoffcial:aI4fEcricKXwBZ4f@speedo.swuhr8z.mongodb.net/";
    this.client = new MongoClient(uri);
    this.db = this.client.db("Book-Out");
    this.studentVerifications = this.db.collection("Student_Verification");
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected to MongoDB successfully");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    // For now, return undefined as we're focusing on student verification
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    // For now, return undefined as we're focusing on student verification
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    return user;
  }

  async getStudentVerification(certificateNumber: string): Promise<StudentVerification | undefined> {
    try {
      const doc = await this.studentVerifications.findOne({ certificateNumber });
      if (doc) {
        return {
          id: doc._id?.toString() || randomUUID(),
          certificateNumber: doc.certificateNumber,
          studentName: doc.studentName,
          registrationNumber: doc.registrationNumber,
          college: doc.college,
          dateOfJoining: doc.dateOfJoining,
          dateOfIssue: doc.dateOfIssue,
          domain: doc.domain,
          status: doc.status,
          grade: doc.grade,
          createdAt: doc.createdAt || new Date(),
        };
      }
      return undefined;
    } catch (error) {
      console.error("Error fetching student verification:", error);
      return undefined;
    }
  }

  async createStudentVerification(insertVerification: InsertStudentVerification): Promise<StudentVerification> {
    const verification: StudentVerification = { 
      ...insertVerification, 
      id: randomUUID(),
      createdAt: new Date()
    };
    
    try {
      await this.studentVerifications.insertOne({
        certificateNumber: verification.certificateNumber,
        studentName: verification.studentName,
        registrationNumber: verification.registrationNumber,
        college: verification.college,
        dateOfJoining: verification.dateOfJoining,
        dateOfIssue: verification.dateOfIssue,
        domain: verification.domain,
        status: verification.status,
        grade: verification.grade,
        createdAt: verification.createdAt,
      });
    } catch (error) {
      console.error("Error creating student verification:", error);
    }
    
    return verification;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      phone: insertSubmission.phone || null,
      createdAt: new Date()
    };
    return submission;
  }
}

// Use MongoDB storage
export const storage = new MongoStorage();

// Initialize MongoDB connection
(async () => {
  try {
    await (storage as MongoStorage).connect();
  } catch (error) {
    console.error("Failed to initialize MongoDB:", error);
    // Fallback to memory storage if MongoDB fails
    const memStorage = new MemStorage();
    Object.assign(storage, memStorage);
  }
})();
