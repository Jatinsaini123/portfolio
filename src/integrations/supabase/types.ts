export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      bids: {
        Row: {
          amount: number
          created_at: string | null
          freelancer_id: string
          id: string
          project_id: string
          proposal: string
          status: string | null
          timeline: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          freelancer_id: string
          id?: string
          project_id: string
          proposal: string
          status?: string | null
          timeline?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          freelancer_id?: string
          id?: string
          project_id?: string
          proposal?: string
          status?: string | null
          timeline?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bids_freelancer_id_fkey"
            columns: ["freelancer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "bids_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      brands: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string
          id: string
          product_id: string
          quantity: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          quantity?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          quantity?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      channels: {
        Row: {
          banner_url: string | null
          channel_description: string | null
          channel_name: string
          created_at: string
          id: string
          subscriber_count: number | null
          total_views: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          banner_url?: string | null
          channel_description?: string | null
          channel_name: string
          created_at?: string
          id?: string
          subscriber_count?: number | null
          total_views?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          banner_url?: string | null
          channel_description?: string | null
          channel_name?: string
          created_at?: string
          id?: string
          subscriber_count?: number | null
          total_views?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          feedback: string | null
          id: string
          language: string | null
          type: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          feedback?: string | null
          id?: string
          language?: string | null
          type: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          feedback?: string | null
          id?: string
          language?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          amount: number
          client_approved_at: string | null
          client_id: string
          created_at: string | null
          freelancer_id: string
          id: string
          project_id: string
          status: string | null
          work_completed_at: string | null
          work_started_at: string | null
        }
        Insert: {
          amount: number
          client_approved_at?: string | null
          client_id: string
          created_at?: string | null
          freelancer_id: string
          id?: string
          project_id: string
          status?: string | null
          work_completed_at?: string | null
          work_started_at?: string | null
        }
        Update: {
          amount?: number
          client_approved_at?: string | null
          client_id?: string
          created_at?: string | null
          freelancer_id?: string
          id?: string
          project_id?: string
          status?: string | null
          work_completed_at?: string | null
          work_started_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "contracts_freelancer_id_fkey"
            columns: ["freelancer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "contracts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_messages: {
        Row: {
          content: string | null
          conversation_id: string
          created_at: string
          edited_at: string | null
          file_name: string | null
          file_size: number | null
          file_type: string | null
          file_url: string | null
          id: string
          message_type: string
          reply_to_message_id: string | null
          sender_id: string
          status: string
          temp_id: string | null
        }
        Insert: {
          content?: string | null
          conversation_id: string
          created_at?: string
          edited_at?: string | null
          file_name?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          message_type?: string
          reply_to_message_id?: string | null
          sender_id: string
          status?: string
          temp_id?: string | null
        }
        Update: {
          content?: string | null
          conversation_id?: string
          created_at?: string
          edited_at?: string | null
          file_name?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          message_type?: string
          reply_to_message_id?: string | null
          sender_id?: string
          status?: string
          temp_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "project_conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_messages_reply_to_message_id_fkey"
            columns: ["reply_to_message_id"]
            isOneToOne: false
            referencedRelation: "conversation_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string
          id: string
          session_id: string
          title: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          session_id: string
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          session_id?: string
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          category: string | null
          created_at: string
          id: string
          is_active: boolean | null
          keywords: string[] | null
          language: string | null
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          language?: string | null
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          language?: string | null
          question?: string
          updated_at?: string
        }
        Relationships: []
      }
      message_reads: {
        Row: {
          id: string
          message_id: string
          read_at: string
          user_id: string
        }
        Insert: {
          id?: string
          message_id: string
          read_at?: string
          user_id: string
        }
        Update: {
          id?: string
          message_id?: string
          read_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_reads_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "conversation_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          project_id: string
          receiver_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          project_id: string
          receiver_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          project_id?: string
          receiver_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          read_at: string | null
          title: string
          type: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          read_at?: string | null
          title: string
          type?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          read_at?: string | null
          title?: string
          type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          brand_id: string | null
          category: string | null
          compare_price: number | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          price: number
          rating: number | null
          review_count: number | null
          stock_quantity: number
          updated_at: string
        }
        Insert: {
          brand_id?: string | null
          category?: string | null
          compare_price?: number | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          rating?: number | null
          review_count?: number | null
          stock_quantity?: number
          updated_at?: string
        }
        Update: {
          brand_id?: string | null
          category?: string | null
          compare_price?: number | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          rating?: number | null
          review_count?: number | null
          stock_quantity?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          email: string
          full_name: string
          hourly_rate: number | null
          id: string
          location: string | null
          portfolio_url: string | null
          rating: number | null
          role: Database["public"]["Enums"]["user_role"]
          skills: string[] | null
          total_earnings: number | null
          total_jobs_completed: number | null
          updated_at: string | null
          user_id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email: string
          full_name: string
          hourly_rate?: number | null
          id?: string
          location?: string | null
          portfolio_url?: string | null
          rating?: number | null
          role: Database["public"]["Enums"]["user_role"]
          skills?: string[] | null
          total_earnings?: number | null
          total_jobs_completed?: number | null
          updated_at?: string | null
          user_id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          hourly_rate?: number | null
          id?: string
          location?: string | null
          portfolio_url?: string | null
          rating?: number | null
          role?: Database["public"]["Enums"]["user_role"]
          skills?: string[] | null
          total_earnings?: number | null
          total_jobs_completed?: number | null
          updated_at?: string | null
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      project_conversations: {
        Row: {
          client_id: string
          created_at: string
          freelancer_id: string
          id: string
          last_message_at: string | null
          project_id: string
          updated_at: string
        }
        Insert: {
          client_id: string
          created_at?: string
          freelancer_id: string
          id?: string
          last_message_at?: string | null
          project_id: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          freelancer_id?: string
          id?: string
          last_message_at?: string | null
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_conversations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          budget_max: number
          budget_min: number
          client_id: string
          created_at: string | null
          deadline: string | null
          description: string
          file_url: string | null
          id: string
          selected_freelancer_id: string | null
          skills_required: string[] | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          budget_max: number
          budget_min: number
          client_id: string
          created_at?: string | null
          deadline?: string | null
          description: string
          file_url?: string | null
          id?: string
          selected_freelancer_id?: string | null
          skills_required?: string[] | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          budget_max?: number
          budget_min?: number
          client_id?: string
          created_at?: string | null
          deadline?: string | null
          description?: string
          file_url?: string | null
          id?: string
          selected_freelancer_id?: string | null
          skills_required?: string[] | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "projects_selected_freelancer_id_fkey"
            columns: ["selected_freelancer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          channel_id: string
          created_at: string
          id: string
          subscriber_id: string
        }
        Insert: {
          channel_id: string
          created_at?: string
          id?: string
          subscriber_id: string
        }
        Update: {
          channel_id?: string
          created_at?: string
          id?: string
          subscriber_id?: string
        }
        Relationships: []
      }
      typing_indicators: {
        Row: {
          conversation_id: string
          id: string
          started_at: string
          user_id: string
        }
        Insert: {
          conversation_id: string
          id?: string
          started_at?: string
          user_id: string
        }
        Update: {
          conversation_id?: string
          id?: string
          started_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "typing_indicators_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "project_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      unanswered_queries: {
        Row: {
          admin_response: string | null
          created_at: string
          id: string
          language: string | null
          query: string
          session_id: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          admin_response?: string | null
          created_at?: string
          id?: string
          language?: string | null
          query: string
          session_id?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          admin_response?: string | null
          created_at?: string
          id?: string
          language?: string | null
          query?: string
          session_id?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_documents: {
        Row: {
          content: Json
          created_at: string
          document_type: string
          id: string
          template_id: string
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content: Json
          created_at?: string
          document_type: string
          id?: string
          template_id: string
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: Json
          created_at?: string
          document_type?: string
          id?: string
          template_id?: string
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      video_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          likes_count: number | null
          parent_comment_id: string | null
          updated_at: string
          user_id: string
          video_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          likes_count?: number | null
          parent_comment_id?: string | null
          updated_at?: string
          user_id: string
          video_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          likes_count?: number | null
          parent_comment_id?: string | null
          updated_at?: string
          user_id?: string
          video_id?: string
        }
        Relationships: []
      }
      video_likes: {
        Row: {
          created_at: string
          id: string
          is_like: boolean
          user_id: string
          video_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_like: boolean
          user_id: string
          video_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_like?: boolean
          user_id?: string
          video_id?: string
        }
        Relationships: []
      }
      video_views: {
        Row: {
          created_at: string
          id: string
          ip_address: unknown | null
          user_agent: string | null
          user_id: string | null
          video_id: string
          watched_duration: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
          video_id: string
          watched_duration?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
          video_id?: string
          watched_duration?: number | null
        }
        Relationships: []
      }
      videos: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          dislikes_count: number | null
          duration: number | null
          file_size: number | null
          id: string
          is_monetized: boolean | null
          is_public: boolean | null
          likes_count: number | null
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          user_id: string
          video_url: string
          views_count: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          dislikes_count?: number | null
          duration?: number | null
          file_size?: number | null
          id?: string
          is_monetized?: boolean | null
          is_public?: boolean | null
          likes_count?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          user_id: string
          video_url: string
          views_count?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          dislikes_count?: number | null
          duration?: number | null
          file_size?: number | null
          id?: string
          is_monetized?: boolean | null
          is_public?: boolean | null
          likes_count?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          user_id?: string
          video_url?: string
          views_count?: number | null
        }
        Relationships: []
      }
      wishlist: {
        Row: {
          created_at: string
          id: string
          product_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wishlist_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_old_typing_indicators: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      upsert_cart_item: {
        Args: { _product_id: string; _quantity: number; _user_id: string }
        Returns: string
      }
    }
    Enums: {
      user_role: "client" | "freelancer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["client", "freelancer"],
    },
  },
} as const
